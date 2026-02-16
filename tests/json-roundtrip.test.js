/**
 * Teste de propriedade: Round-trip de serialização JSON
 *
 * Propriedade 2: Para qualquer array válido de objetos de estilo com prompts
 * estruturados, serializar com JSON.stringify e desserializar com JSON.parse
 * deve produzir um array equivalente ao original, preservando todos os
 * caracteres especiais, acentos, quebras de linha e formatação.
 *
 * **Validates: Requirements 1.3, 4.3**
 */

import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { readFileSync } from 'fs';
import path from 'path';

const ROOT_DIR = path.resolve(import.meta.dirname, '..');
const DATA_JSON_PATH = path.join(ROOT_DIR, 'app', 'data', 'data.json');

// Carrega o data.json real
const dataJson = JSON.parse(readFileSync(DATA_JSON_PATH, 'utf-8'));

// --- Arbitrary: strings com caracteres especiais ---

/**
 * Gera strings contendo acentos, quebras de linha, formatação markdown,
 * unicode e caracteres especiais comuns nos prompts do projeto.
 */
const specialCharsArbitrary = fc.stringOf(
  fc.oneof(
    // Caracteres ASCII normais
    fc.char().filter((c) => c >= ' ' && c <= '~'),
    // Acentos e caracteres portugueses
    fc.constantFrom('é', 'ã', 'ç', 'ü', 'ó', 'á', 'í', 'ú', 'â', 'ê', 'ô', 'õ', 'à'),
    // Quebras de linha
    fc.constantFrom('\n'),
    // Formatação markdown
    fc.constantFrom('## ', '- ', '☐ ', '✓ '),
    // Unicode misc
    fc.constantFrom('—', '–', '"', '"', '…', '°', '±')
  ),
  { minLength: 1, maxLength: 150 }
).filter((s) => s.trim().length > 0);

const estiloArbitrary = fc.record({
  nome: specialCharsArbitrary,
  tipo: fc.constantFrom('General', 'Landing Page', 'BI/Analytics', 'Infographic'),
  keywords: specialCharsArbitrary,
  coresPrimarias: specialCharsArbitrary,
  coresSecundarias: specialCharsArbitrary,
  efeitos: specialCharsArbitrary,
  era: specialCharsArbitrary,
  lightDark: specialCharsArbitrary,
});

const promptArbitrary = fc.record({
  header: specialCharsArbitrary,
  estilo: estiloArbitrary,
  aiPromptKeywords: specialCharsArbitrary,
  cssTechnical: specialCharsArbitrary,
  designSystemVariables: specialCharsArbitrary,
  checklist: specialCharsArbitrary,
  regrasDeExecucao: specialCharsArbitrary,
});

const styleObjectArbitrary = fc.record({
  id: fc.integer({ min: 1, max: 9999 }),
  name: specialCharsArbitrary,
  type: fc.constantFrom('General', 'Landing Page', 'BI/Analytics', 'Infographic'),
  prompt: promptArbitrary,
});

const stylesArrayArbitrary = fc.array(styleObjectArbitrary, { minLength: 1, maxLength: 20 });

describe('Propriedade 2: Round-trip de serialização JSON', () => {
  /**
   * **Validates: Requirements 1.3, 4.3**
   *
   * Para qualquer array de objetos de estilo gerados aleatoriamente
   * (incluindo caracteres especiais, acentos, quebras de linha e markdown),
   * serializar com JSON.stringify e desserializar com JSON.parse deve
   * produzir um array profundamente igual ao original.
   */
  it('JSON.stringify seguido de JSON.parse deve preservar todos os dados para objetos gerados aleatoriamente', () => {
    fc.assert(
      fc.property(stylesArrayArbitrary, (styles) => {
        const serialized = JSON.stringify(styles);
        const deserialized = JSON.parse(serialized);

        expect(deserialized).toEqual(styles);
        expect(deserialized.length).toBe(styles.length);

        // Verifica preservação campo a campo para cada objeto
        for (let i = 0; i < styles.length; i++) {
          const original = styles[i];
          const roundTripped = deserialized[i];

          expect(roundTripped.id).toBe(original.id);
          expect(roundTripped.name).toBe(original.name);
          expect(roundTripped.type).toBe(original.type);
          expect(roundTripped.prompt.header).toBe(original.prompt.header);
          expect(roundTripped.prompt.estilo).toEqual(original.prompt.estilo);
          expect(roundTripped.prompt.aiPromptKeywords).toBe(original.prompt.aiPromptKeywords);
          expect(roundTripped.prompt.cssTechnical).toBe(original.prompt.cssTechnical);
          expect(roundTripped.prompt.designSystemVariables).toBe(original.prompt.designSystemVariables);
          expect(roundTripped.prompt.checklist).toBe(original.prompt.checklist);
          expect(roundTripped.prompt.regrasDeExecucao).toBe(original.prompt.regrasDeExecucao);
        }
      }),
      { numRuns: 100, verbose: true }
    );
  });

  /**
   * **Validates: Requirements 1.3, 4.3**
   *
   * Testa o round-trip com o data.json real do projeto, garantindo que
   * o conteúdo real (com acentos em PT-BR, markdown, unicode) sobrevive
   * à serialização/desserialização sem perda.
   */
  it('round-trip deve preservar todos os dados do data.json real', () => {
    const serialized = JSON.stringify(dataJson);
    const deserialized = JSON.parse(serialized);

    expect(deserialized).toEqual(dataJson);

    // Verifica amostragem aleatória de entradas do data.json real
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: dataJson.length - 1 }),
        (index) => {
          const original = dataJson[index];
          const roundTripped = deserialized[index];

          expect(roundTripped).toEqual(original);

          // Verifica que strings com caracteres especiais sobrevivem
          expect(roundTripped.prompt.header).toBe(original.prompt.header);
          expect(roundTripped.prompt.regrasDeExecucao).toBe(original.prompt.regrasDeExecucao);
          expect(roundTripped.prompt.checklist).toBe(original.prompt.checklist);
          expect(roundTripped.prompt.estilo.nome).toBe(original.prompt.estilo.nome);
        }
      ),
      { numRuns: Math.min(dataJson.length * 3, 300), verbose: true }
    );
  });

  /**
   * **Validates: Requirements 1.3, 4.3**
   *
   * Testa especificamente que strings com caracteres especiais comuns
   * nos prompts (acentos PT-BR, markdown, unicode) sobrevivem ao round-trip.
   */
  it('round-trip deve preservar strings com caracteres especiais isolados', () => {
    fc.assert(
      fc.property(specialCharsArbitrary, (str) => {
        const obj = { value: str };
        const roundTripped = JSON.parse(JSON.stringify(obj));
        expect(roundTripped.value).toBe(str);
      }),
      { numRuns: 100, verbose: true }
    );
  });
});
