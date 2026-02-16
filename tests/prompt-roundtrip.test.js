/**
 * Teste de propriedade: Round-trip de reconstrução do prompt (buildPromptText)
 *
 * Propriedade 5: Para qualquer arquivo .txt original, parsear o texto em um
 * objeto prompt estruturado e reconstruí-lo via buildPromptText deve produzir
 * um texto equivalente ao original.
 *
 * **Validates: Requirements 4.2, 4.3**
 */

import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';

const ROOT_DIR = path.resolve(import.meta.dirname, '..');
const PROMPTS_DIR = path.join(ROOT_DIR, 'app', 'prompts');
const DATA_JSON_PATH = path.join(ROOT_DIR, 'app', 'data', 'data.json');

// --- Lógica do buildPromptText (espelha a implementação no index.html) ---

function buildPromptText(promptObj) {
  const lines = [];
  lines.push(promptObj.header);
  lines.push('');
  lines.push('## Estilo');
  lines.push(`- Nome: ${promptObj.estilo.nome}`);
  lines.push(`- Tipo: ${promptObj.estilo.tipo}`);
  lines.push(`- Keywords: ${promptObj.estilo.keywords}`);
  lines.push(`- Cores Primárias: ${promptObj.estilo.coresPrimarias}`);
  lines.push(`- Cores Secundárias: ${promptObj.estilo.coresSecundarias}`);
  lines.push(`- Efeitos: ${promptObj.estilo.efeitos}`);
  lines.push(`- Era: ${promptObj.estilo.era}`);
  lines.push(`- Light/Dark: ${promptObj.estilo.lightDark}`);
  lines.push('');
  lines.push('## AI Prompt Keywords (SIGA FIELMENTE)');
  lines.push(promptObj.aiPromptKeywords);
  lines.push('');
  lines.push('## CSS/Technical');
  lines.push(promptObj.cssTechnical);
  lines.push('');
  lines.push('## Design System Variables');
  lines.push(promptObj.designSystemVariables);
  lines.push('');
  lines.push('## Checklist');
  lines.push(promptObj.checklist);
  lines.push('');
  lines.push('## REGRAS DE EXECUÇÃO');
  lines.push(promptObj.regrasDeExecucao);
  return lines.join('\n');
}

// --- Lógica de parse (espelha o migrate-to-json.py) ---

/**
 * Parseia texto de prompt nas seções estruturadas.
 * Espelha a lógica do parse_prompt_file em migrate-to-json.py.
 */
function parsePromptText(content) {
  const sectionMap = {
    'Estilo': 'estilo',
    'AI Prompt Keywords (SIGA FIELMENTE)': 'aiPromptKeywords',
    'CSS/Technical': 'cssTechnical',
    'Design System Variables': 'designSystemVariables',
    'Checklist': 'checklist',
    'REGRAS DE EXECUÇÃO': 'regrasDeExecucao',
  };

  // Divide o conteúdo em seções usando '## ' como delimitador
  const parts = content.split(/^## /m);

  const header = parts[0].trim();

  const prompt = {
    header,
    estilo: {},
    aiPromptKeywords: '',
    cssTechnical: '',
    designSystemVariables: '',
    checklist: '',
    regrasDeExecucao: '',
  };

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const newlineIdx = part.indexOf('\n');
    const title = (newlineIdx === -1 ? part : part.substring(0, newlineIdx)).trim();
    const body = (newlineIdx === -1 ? '' : part.substring(newlineIdx + 1)).trim();

    for (const [sectionTitle, key] of Object.entries(sectionMap)) {
      if (title === sectionTitle) {
        if (key === 'estilo') {
          prompt[key] = parseEstiloSection(body);
        } else {
          prompt[key] = body;
        }
        break;
      }
    }
  }

  return prompt;
}

/**
 * Parseia a seção '## Estilo' nos subcampos estruturados.
 * Espelha a lógica do parse_estilo_section em migrate-to-json.py.
 */
function parseEstiloSection(text) {
  const fieldMap = {
    'Nome': 'nome',
    'Tipo': 'tipo',
    'Keywords': 'keywords',
    'Cores Primárias': 'coresPrimarias',
    'Cores Secundárias': 'coresSecundarias',
    'Efeitos': 'efeitos',
    'Era': 'era',
    'Light/Dark': 'lightDark',
  };

  const estilo = {};
  for (const val of Object.values(fieldMap)) {
    estilo[val] = '';
  }

  for (const rawLine of text.trim().split('\n')) {
    const line = rawLine.trim();
    if (!line.startsWith('- ')) continue;
    const rest = line.substring(2);
    for (const [label, key] of Object.entries(fieldMap)) {
      if (rest.startsWith(label + ':')) {
        estilo[key] = rest.substring(label.length + 1).trim();
        break;
      }
    }
  }

  return estilo;
}

// --- Arbitraries ---

/**
 * Gera strings de uma linha (sem quebras de linha e sem '## ') para campos
 * que são valores simples. Evita strings que quebrariam o parser.
 */
const singleLineArbitrary = fc
  .stringOf(
    fc.oneof(
      fc.char().filter(c => c >= ' ' && c <= '~' && c !== '\n' && c !== '\r'),
      fc.constantFrom('é', 'ã', 'ç', 'ü', 'ó', 'á', 'í', 'ú', 'â', 'ê', 'ô', 'õ', 'à'),
      fc.constantFrom('—', '–', '"', '"', '…', '°', '±', '✓', '◐', '☐')
    ),
    { minLength: 1, maxLength: 80 }
  )
  .filter(s => s.trim().length > 0)
  .map(s => s.trim());

/**
 * Gera strings multi-linha para campos de seção (aiPromptKeywords, etc.).
 * Não pode conter '## ' no início de uma linha (quebraria o parser).
 * Cada linha é trimada e o resultado final também, pois o parser faz .trim().
 */
const multiLineArbitrary = fc
  .array(
    fc.stringOf(
      fc.oneof(
        fc.char().filter(c => c > ' ' && c <= '~'),
        fc.constantFrom('é', 'ã', 'ç', 'ü', 'ó', 'á', 'í', 'ú', 'â', 'ê', 'ô', 'õ', 'à'),
        fc.constantFrom('—', '–', '"', '"', '…', '°', '±', '✓', '◐', '☐')
      ),
      { minLength: 1, maxLength: 100 }
    ).filter(s => s.trim().length > 0)
     .map(s => s.trim()),
    { minLength: 1, maxLength: 5 }
  )
  .map(lines => lines.join('\n').trim())
  .filter(s => s.length > 0 && !s.split('\n').some(line => line.startsWith('## ')));

/**
 * Gera strings para o header do prompt.
 * O header não pode conter '## ' no início de uma linha.
 */
const headerArbitrary = multiLineArbitrary;

/**
 * Gera strings para campos do estilo que não podem conter newlines
 * nem começar com '- ' (para não confundir o parser de estilo).
 */
const estiloFieldArbitrary = singleLineArbitrary
  .filter(s => !s.startsWith('- '));

const estiloArbitrary = fc.record({
  nome: estiloFieldArbitrary,
  tipo: estiloFieldArbitrary,
  keywords: estiloFieldArbitrary,
  coresPrimarias: estiloFieldArbitrary,
  coresSecundarias: estiloFieldArbitrary,
  efeitos: estiloFieldArbitrary,
  era: estiloFieldArbitrary,
  lightDark: estiloFieldArbitrary,
});

const promptArbitrary = fc.record({
  header: headerArbitrary,
  estilo: estiloArbitrary,
  aiPromptKeywords: multiLineArbitrary,
  cssTechnical: multiLineArbitrary,
  designSystemVariables: multiLineArbitrary,
  checklist: multiLineArbitrary,
  regrasDeExecucao: multiLineArbitrary,
});

// --- Testes ---

describe('Propriedade 5: Round-trip de reconstrução do prompt (buildPromptText)', () => {
  /**
   * **Validates: Requirements 4.2, 4.3**
   *
   * Para qualquer objeto prompt gerado aleatoriamente, construir o texto
   * via buildPromptText, parsear de volta, e construir novamente deve
   * produzir texto idêntico ao primeiro build.
   *
   * Ciclo: promptObj → buildPromptText → parsePromptText → buildPromptText
   * O segundo buildPromptText deve ser idêntico ao primeiro.
   */
  it('build → parse → build deve produzir texto idêntico (round-trip com objetos gerados)', () => {
    fc.assert(
      fc.property(promptArbitrary, (promptObj) => {
        const text1 = buildPromptText(promptObj);
        const parsed = parsePromptText(text1);
        const text2 = buildPromptText(parsed);

        expect(text2).toBe(text1);
      }),
      { numRuns: 100, verbose: true }
    );
  });

  /**
   * **Validates: Requirements 4.2, 4.3**
   *
   * Para qualquer objeto prompt gerado aleatoriamente, construir o texto
   * e parsear de volta deve produzir um objeto com os mesmos valores
   * em todos os campos.
   */
  it('build → parse deve preservar todos os campos do objeto prompt', () => {
    fc.assert(
      fc.property(promptArbitrary, (promptObj) => {
        const text = buildPromptText(promptObj);
        const parsed = parsePromptText(text);

        expect(parsed.header).toBe(promptObj.header);
        expect(parsed.estilo).toEqual(promptObj.estilo);
        expect(parsed.aiPromptKeywords).toBe(promptObj.aiPromptKeywords);
        expect(parsed.cssTechnical).toBe(promptObj.cssTechnical);
        expect(parsed.designSystemVariables).toBe(promptObj.designSystemVariables);
        expect(parsed.checklist).toBe(promptObj.checklist);
        expect(parsed.regrasDeExecucao).toBe(promptObj.regrasDeExecucao);
      }),
      { numRuns: 100, verbose: true }
    );
  });

  /**
   * **Validates: Requirements 4.2, 4.3**
   *
   * Testa o round-trip com os arquivos .txt reais do projeto e compara
   * com as entradas correspondentes no data.json.
   * Para cada arquivo .txt: parseia, reconstrói via buildPromptText,
   * parseia novamente, e verifica que o segundo parse é idêntico ao primeiro.
   */
  it('round-trip deve funcionar com os arquivos .txt reais do projeto', () => {
    const dataJson = JSON.parse(readFileSync(DATA_JSON_PATH, 'utf-8'));
    const dataMap = {};
    dataJson.forEach(entry => { dataMap[entry.id] = entry; });

    const txtFiles = readdirSync(PROMPTS_DIR)
      .filter(f => f.endsWith('.txt'))
      .map(f => parseInt(f.replace('.txt', ''), 10))
      .filter(id => !isNaN(id));

    expect(txtFiles.length).toBeGreaterThan(0);

    for (const id of txtFiles) {
      const txtContent = readFileSync(path.join(PROMPTS_DIR, `${id}.txt`), 'utf-8');

      // Parse do .txt
      const parsed1 = parsePromptText(txtContent);

      // Reconstrói o texto
      const rebuilt = buildPromptText(parsed1);

      // Parse novamente
      const parsed2 = parsePromptText(rebuilt);

      // Reconstrói novamente
      const rebuilt2 = buildPromptText(parsed2);

      // O segundo rebuild deve ser idêntico ao primeiro (round-trip estável)
      expect(rebuilt2).toBe(rebuilt);

      // Os dois parses devem produzir objetos idênticos
      expect(parsed2).toEqual(parsed1);

      // Se o ID existe no data.json, o objeto parseado deve bater
      if (dataMap[id]) {
        const jsonPrompt = dataMap[id].prompt;
        expect(parsed1.header).toBe(jsonPrompt.header);
        expect(parsed1.estilo).toEqual(jsonPrompt.estilo);
        expect(parsed1.aiPromptKeywords).toBe(jsonPrompt.aiPromptKeywords);
        expect(parsed1.cssTechnical).toBe(jsonPrompt.cssTechnical);
        expect(parsed1.designSystemVariables).toBe(jsonPrompt.designSystemVariables);
        expect(parsed1.checklist).toBe(jsonPrompt.checklist);
        expect(parsed1.regrasDeExecucao).toBe(jsonPrompt.regrasDeExecucao);
      }
    }
  });

  /**
   * **Validates: Requirements 4.2, 4.3**
   *
   * Testa o round-trip usando entradas aleatórias do data.json real.
   * Reconstrói o texto a partir do prompt estruturado, parseia de volta,
   * e verifica que o objeto parseado é idêntico ao original.
   */
  it('round-trip deve funcionar com entradas aleatórias do data.json real', () => {
    const dataJson = JSON.parse(readFileSync(DATA_JSON_PATH, 'utf-8'));

    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: dataJson.length - 1 }),
        (index) => {
          const entry = dataJson[index];
          const promptObj = entry.prompt;

          // Build → Parse → Build
          const text1 = buildPromptText(promptObj);
          const parsed = parsePromptText(text1);
          const text2 = buildPromptText(parsed);

          expect(text2).toBe(text1);
          expect(parsed.header).toBe(promptObj.header);
          expect(parsed.estilo).toEqual(promptObj.estilo);
          expect(parsed.aiPromptKeywords).toBe(promptObj.aiPromptKeywords);
          expect(parsed.cssTechnical).toBe(promptObj.cssTechnical);
          expect(parsed.designSystemVariables).toBe(promptObj.designSystemVariables);
          expect(parsed.checklist).toBe(promptObj.checklist);
          expect(parsed.regrasDeExecucao).toBe(promptObj.regrasDeExecucao);
        }
      ),
      { numRuns: 100, verbose: true }
    );
  });
});
