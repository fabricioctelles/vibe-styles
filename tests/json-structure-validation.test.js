/**
 * Teste de propriedade: Validação de estrutura do JSON
 *
 * Propriedade 1: Para qualquer objeto no array do Data_JSON, o objeto deve
 * possuir os campos `id` (number), `name` (string), `type` (string) e
 * `prompt` (object), e o campo `prompt` deve possuir os subcampos `header`,
 * `estilo`, `aiPromptKeywords`, `cssTechnical`, `designSystemVariables`,
 * `checklist` e `regrasDeExecucao`, todos com valores não-vazios.
 *
 * **Validates: Requirements 1.1**
 */

import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { readFileSync } from 'fs';
import path from 'path';

const ROOT_DIR = path.resolve(import.meta.dirname, '..');
const DATA_JSON_PATH = path.join(ROOT_DIR, 'app', 'data', 'data.json');

// Carrega o data.json real
const dataJson = JSON.parse(readFileSync(DATA_JSON_PATH, 'utf-8'));

// Campos obrigatórios do subcampo `estilo`
const ESTILO_FIELDS = [
  'nome',
  'tipo',
  'keywords',
  'coresPrimarias',
  'coresSecundarias',
  'efeitos',
  'era',
  'lightDark',
];

// Subcampos obrigatórios do campo `prompt`
const PROMPT_FIELDS = [
  'header',
  'estilo',
  'aiPromptKeywords',
  'cssTechnical',
  'designSystemVariables',
  'checklist',
  'regrasDeExecucao',
];

/**
 * Valida a estrutura completa de um objeto de estilo.
 * Retorna um array de erros encontrados (vazio = válido).
 */
function validateStyleObject(obj) {
  const errors = [];

  // Campos de nível raiz
  if (typeof obj.id !== 'number') errors.push(`id deveria ser number, é ${typeof obj.id}`);
  if (typeof obj.name !== 'string') errors.push(`name deveria ser string, é ${typeof obj.name}`);
  if (typeof obj.type !== 'string') errors.push(`type deveria ser string, é ${typeof obj.type}`);
  if (typeof obj.prompt !== 'object' || obj.prompt === null) {
    errors.push(`prompt deveria ser object, é ${typeof obj.prompt}`);
    return errors; // Sem prompt, não dá para validar subcampos
  }

  // Subcampos do prompt (exceto estilo, que é objeto)
  for (const field of PROMPT_FIELDS) {
    if (field === 'estilo') {
      if (typeof obj.prompt.estilo !== 'object' || obj.prompt.estilo === null) {
        errors.push(`prompt.estilo deveria ser object, é ${typeof obj.prompt.estilo}`);
      }
    } else {
      if (typeof obj.prompt[field] !== 'string') {
        errors.push(`prompt.${field} deveria ser string, é ${typeof obj.prompt[field]}`);
      } else if (obj.prompt[field].trim().length === 0) {
        errors.push(`prompt.${field} está vazio`);
      }
    }
  }

  // Subcampos do estilo
  if (typeof obj.prompt.estilo === 'object' && obj.prompt.estilo !== null) {
    for (const field of ESTILO_FIELDS) {
      if (typeof obj.prompt.estilo[field] !== 'string') {
        errors.push(`prompt.estilo.${field} deveria ser string, é ${typeof obj.prompt.estilo[field]}`);
      } else if (obj.prompt.estilo[field].trim().length === 0) {
        errors.push(`prompt.estilo.${field} está vazio`);
      }
    }
  }

  // Valores não-vazios para name e type
  if (typeof obj.name === 'string' && obj.name.trim().length === 0) {
    errors.push('name está vazio');
  }
  if (typeof obj.type === 'string' && obj.type.trim().length === 0) {
    errors.push('type está vazio');
  }

  return errors;
}

// --- Arbitraries para gerar objetos de estilo válidos ---

const estiloArbitrary = fc.record({
  nome: fc.string({ minLength: 1, maxLength: 50 }).filter((s) => s.trim().length > 0),
  tipo: fc.constantFrom('General', 'Landing Page', 'BI/Analytics', 'Infographic'),
  keywords: fc.string({ minLength: 1, maxLength: 100 }).filter((s) => s.trim().length > 0),
  coresPrimarias: fc.string({ minLength: 1, maxLength: 80 }).filter((s) => s.trim().length > 0),
  coresSecundarias: fc.string({ minLength: 1, maxLength: 80 }).filter((s) => s.trim().length > 0),
  efeitos: fc.string({ minLength: 1, maxLength: 100 }).filter((s) => s.trim().length > 0),
  era: fc.string({ minLength: 1, maxLength: 30 }).filter((s) => s.trim().length > 0),
  lightDark: fc.string({ minLength: 1, maxLength: 30 }).filter((s) => s.trim().length > 0),
});

const promptArbitrary = fc.record({
  header: fc.string({ minLength: 1, maxLength: 200 }).filter((s) => s.trim().length > 0),
  estilo: estiloArbitrary,
  aiPromptKeywords: fc.string({ minLength: 1, maxLength: 200 }).filter((s) => s.trim().length > 0),
  cssTechnical: fc.string({ minLength: 1, maxLength: 200 }).filter((s) => s.trim().length > 0),
  designSystemVariables: fc.string({ minLength: 1, maxLength: 200 }).filter((s) => s.trim().length > 0),
  checklist: fc.string({ minLength: 1, maxLength: 200 }).filter((s) => s.trim().length > 0),
  regrasDeExecucao: fc.string({ minLength: 1, maxLength: 200 }).filter((s) => s.trim().length > 0),
});

const styleObjectArbitrary = fc.record({
  id: fc.integer({ min: 1, max: 9999 }),
  name: fc.string({ minLength: 1, maxLength: 60 }).filter((s) => s.trim().length > 0),
  type: fc.constantFrom('General', 'Landing Page', 'BI/Analytics', 'Infographic'),
  prompt: promptArbitrary,
});

describe('Propriedade 1: Validação de estrutura do JSON', () => {
  /**
   * **Validates: Requirements 1.1**
   *
   * Testa que objetos de estilo gerados aleatoriamente com a estrutura
   * correta passam na validação de estrutura.
   */
  it('qualquer objeto de estilo gerado com a estrutura correta deve passar na validação', () => {
    fc.assert(
      fc.property(styleObjectArbitrary, (styleObj) => {
        const errors = validateStyleObject(styleObj);
        expect(errors).toEqual([]);
      }),
      { numRuns: 100, verbose: true }
    );
  });

  /**
   * **Validates: Requirements 1.1**
   *
   * Testa que TODOS os objetos no data.json real possuem a estrutura
   * esperada com todos os campos obrigatórios e valores não-vazios.
   */
  it('todos os objetos no data.json real devem possuir estrutura válida', () => {
    expect(Array.isArray(dataJson)).toBe(true);
    expect(dataJson.length).toBeGreaterThan(0);

    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: dataJson.length - 1 }),
        (index) => {
          const obj = dataJson[index];
          const errors = validateStyleObject(obj);
          expect(errors).toEqual([]);
        }
      ),
      { numRuns: Math.min(dataJson.length * 3, 300), verbose: true }
    );
  });

  /**
   * **Validates: Requirements 1.1**
   *
   * Testa que objetos com campos ausentes ou inválidos falham na validação.
   * Garante que a função de validação rejeita estruturas incorretas.
   */
  it('objetos com campos ausentes ou inválidos devem falhar na validação', () => {
    fc.assert(
      fc.property(styleObjectArbitrary, (validObj) => {
        // Remove um campo aleatório do nível raiz
        const withoutId = { ...validObj };
        delete withoutId.id;
        withoutId.id = 'not-a-number';
        expect(validateStyleObject(withoutId).length).toBeGreaterThan(0);

        // Remove um subcampo do prompt
        const withoutHeader = {
          ...validObj,
          prompt: { ...validObj.prompt, header: '' },
        };
        expect(validateStyleObject(withoutHeader).length).toBeGreaterThan(0);

        // Prompt nulo
        const withNullPrompt = { ...validObj, prompt: null };
        expect(validateStyleObject(withNullPrompt).length).toBeGreaterThan(0);

        // Estilo com campo vazio
        const withEmptyEstiloField = {
          ...validObj,
          prompt: {
            ...validObj.prompt,
            estilo: { ...validObj.prompt.estilo, nome: '   ' },
          },
        };
        expect(validateStyleObject(withEmptyEstiloField).length).toBeGreaterThan(0);
      }),
      { numRuns: 100, verbose: true }
    );
  });
});
