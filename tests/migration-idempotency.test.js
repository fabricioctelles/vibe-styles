/**
 * Teste de propriedade: Idempotência do script de migração
 *
 * Propriedade 6: Para qualquer conjunto de arquivos .txt de entrada,
 * executar o script de migração duas vezes consecutivas deve produzir
 * exatamente o mesmo arquivo JSON de saída.
 *
 * **Validates: Requirements 6.2**
 *
 * Estratégia: Usa fast-check para gerar arquivos .txt temporários com
 * conteúdo aleatório no formato esperado pelo script, cria um index.html
 * temporário com o array STYLES correspondente, executa o script de
 * migração duas vezes e compara as saídas byte a byte.
 */

import { describe, it, expect, afterAll } from 'vitest';
import fc from 'fast-check';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import path from 'path';
import crypto from 'crypto';

const ROOT_DIR = path.resolve(import.meta.dirname, '..');
const SCRIPT_PATH = path.join(ROOT_DIR, 'scripts', 'migrate-to-json.py');

// Diretório temporário para os dados de teste
const TEMP_DIR = path.join(ROOT_DIR, '.test-temp');
const TEMP_PROMPTS_DIR = path.join(TEMP_DIR, 'app', 'prompts');
const TEMP_DATA_DIR = path.join(TEMP_DIR, 'app', 'data');
const TEMP_HTML_PATH = path.join(TEMP_DIR, 'app', 'index.html');
const TEMP_OUTPUT_PATH = path.join(TEMP_DATA_DIR, 'data.json');

/**
 * Gera o conteúdo de um arquivo .txt no formato esperado pelo script.
 */
function buildTxtContent(styleName, styleType, keywords) {
  return [
    'Atue como um Engenheiro Frontend Sênior e UI Designer Especialista.',
    '',
    'Sua tarefa é codificar uma Landing Page completa na primeira tentativa.',
    '',
    '- Tema da Landing Page <INSIRA O TEMA>',
    '- Seções a adicionar <INSIRA AS SEÇÕES>',
    '',
    'Gere o código final imediatamente seguindo estas definições:',
    '',
    '## Estilo',
    `- Nome: ${styleName}`,
    `- Tipo: ${styleType}`,
    `- Keywords: ${keywords}`,
    '- Cores Primárias: Black #000000, White #FFFFFF',
    '- Cores Secundárias: Grey #808080',
    '- Efeitos: Subtle hover transitions',
    '- Era: Modern',
    '- Light/Dark: ✓ Full / ✓ Full',
    '',
    '## AI Prompt Keywords (SIGA FIELMENTE)',
    `Design a ${styleName} landing page with ${keywords}`,
    '',
    '## CSS/Technical',
    'display: grid, gap: 2rem, font-family: sans-serif',
    '',
    '## Design System Variables',
    '--spacing: 2rem, --border-radius: 4px',
    '',
    '## Checklist',
    '☐ Layout responsivo, ☐ Tipografia clara',
    '',
    '## REGRAS DE EXECUÇÃO',
    '1. Siga fielmente o estilo visual determinado.',
    '2. Use ícones SVG inline.',
  ].join('\n');
}

/**
 * Gera o HTML mínimo com o array STYLES para o script de migração.
 */
function buildIndexHtml(styles) {
  const stylesArray = styles
    .map((s) => `      { id: ${s.id}, name: "${s.name}", type: "${s.type}" }`)
    .join(',\n');

  return `<!DOCTYPE html>
<html>
<head><title>Test</title></head>
<body>
<script>
    const STYLES = [
${stylesArray}
    ];
</script>
</body>
</html>`;
}

/**
 * Cria o ambiente temporário com os arquivos .txt e index.html gerados.
 */
function setupTempEnvironment(styles) {
  // Limpa ambiente anterior
  if (existsSync(TEMP_DIR)) {
    rmSync(TEMP_DIR, { recursive: true, force: true });
  }

  mkdirSync(TEMP_PROMPTS_DIR, { recursive: true });
  mkdirSync(TEMP_DATA_DIR, { recursive: true });

  // Cria index.html com o array STYLES
  writeFileSync(TEMP_HTML_PATH, buildIndexHtml(styles), 'utf-8');

  // Cria os arquivos .txt
  for (const style of styles) {
    const txtPath = path.join(TEMP_PROMPTS_DIR, `${style.id}.txt`);
    writeFileSync(txtPath, style.content, 'utf-8');
  }
}

/**
 * Executa o script de migração apontando para o diretório temporário.
 * O script usa __file__ para resolver caminhos relativos, então criamos
 * um wrapper que ajusta os caminhos.
 */
function runMigrationOnTemp() {
  // Cria um script wrapper que sobrescreve os caminhos do script original
  const wrapperScript = `
import sys, os
sys.path.insert(0, '${ROOT_DIR.replace(/\\/g, '/')}')

# Monkey-patch os.path para redirecionar ao diretório temporário
import scripts_migrate_wrapper

scripts_migrate_wrapper.run('${TEMP_DIR.replace(/\\/g, '/')}')
`;

  // Abordagem mais simples: copiar o script e modificar o base_dir
  const originalScript = readFileSync(SCRIPT_PATH, 'utf-8');
  const modifiedScript = originalScript.replace(
    "base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))",
    `base_dir = '${TEMP_DIR.replace(/\\/g, '/')}'`
  );

  const tempScriptPath = path.join(TEMP_DIR, 'migrate.py');
  writeFileSync(tempScriptPath, modifiedScript, 'utf-8');

  execSync(`python3 "${tempScriptPath}"`, {
    cwd: TEMP_DIR,
    encoding: 'utf-8',
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  return readFileSync(TEMP_OUTPUT_PATH, 'utf-8');
}

/**
 * Calcula hash SHA-256 de uma string.
 */
function sha256(content) {
  return crypto.createHash('sha256').update(content, 'utf-8').digest('hex');
}

// Arbitrary para gerar um estilo válido
const styleArbitrary = (id) =>
  fc.record({
    id: fc.constant(id),
    name: fc.stringMatching(/^[A-Za-z][A-Za-z0-9 &-]{2,30}$/),
    type: fc.constantFrom('General', 'Landing Page', 'BI/Analytics', 'Infographic'),
    keywords: fc.stringMatching(/^[A-Za-z][A-Za-z0-9, ]{5,50}$/),
  }).map((s) => ({
    ...s,
    content: buildTxtContent(s.name, s.type, s.keywords),
  }));

// Arbitrary para gerar um conjunto de estilos (1 a 10 estilos)
const stylesArbitrary = fc
  .integer({ min: 1, max: 10 })
  .chain((count) =>
    fc.tuple(...Array.from({ length: count }, (_, i) => styleArbitrary(i + 1)))
  );

describe('Propriedade 6: Idempotência do script de migração', () => {
  afterAll(() => {
    // Limpa diretório temporário
    if (existsSync(TEMP_DIR)) {
      rmSync(TEMP_DIR, { recursive: true, force: true });
    }
  });

  /**
   * **Validates: Requirements 6.2**
   *
   * Para qualquer conjunto de arquivos .txt gerados aleatoriamente,
   * executar o script de migração duas vezes consecutivas deve produzir
   * exatamente o mesmo arquivo JSON de saída.
   */
  it('executar o script duas vezes consecutivas deve produzir JSON idêntico para qualquer conjunto de entradas', () => {
    fc.assert(
      fc.property(stylesArbitrary, (styles) => {
        // Configura ambiente temporário com os estilos gerados
        setupTempEnvironment(styles);

        // Primeira execução
        const firstRun = runMigrationOnTemp();

        // Segunda execução
        const secondRun = runMigrationOnTemp();

        // Comparação por hash (mais eficiente para strings grandes)
        const hash1 = sha256(firstRun);
        const hash2 = sha256(secondRun);
        expect(hash2).toBe(hash1);

        // Verifica também que o JSON é válido e contém os estilos esperados
        const parsed = JSON.parse(firstRun);
        expect(Array.isArray(parsed)).toBe(true);
        expect(parsed.length).toBe(styles.length);
      }),
      {
        numRuns: 100,
        verbose: true,
      }
    );
  });
});
