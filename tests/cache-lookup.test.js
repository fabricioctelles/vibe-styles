/**
 * Teste de propriedade: Busca no cache retorna prompt correto
 *
 * Propriedade 4: Para qualquer ID válido presente no cache, a função
 * getPrompt(id) deve retornar exatamente o objeto prompt associado àquele
 * ID, e para qualquer ID não presente no cache, deve retornar null.
 *
 * **Validates: Requirements 3.1, 3.4**
 */

import { describe, it, expect } from 'vitest';
import fc from 'fast-check';

// --- Lógica do DataLoader (espelha a implementação no index.html) ---

/**
 * Cria uma instância do DataLoader com as funções de busca,
 * usando a mesma lógica do módulo no index.html.
 */
function createDataLoader(data) {
  const cache = {};
  data.forEach(item => {
    cache[item.id] = item;
  });
  const styles = [...data].sort((a, b) => a.id - b.id);

  return {
    cache,
    styles,

    getPrompt(id) {
      const entry = cache[id];
      return entry ? entry.prompt : null;
    },

    getStyle(id) {
      return cache[id] || null;
    },
  };
}

// --- Arbitraries ---

const estiloArbitrary = fc.record({
  nome: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
  tipo: fc.constantFrom('General', 'Landing Page', 'BI/Analytics', 'Infographic'),
  keywords: fc.string({ minLength: 1, maxLength: 80 }).filter(s => s.trim().length > 0),
  coresPrimarias: fc.string({ minLength: 1, maxLength: 60 }).filter(s => s.trim().length > 0),
  coresSecundarias: fc.string({ minLength: 1, maxLength: 60 }).filter(s => s.trim().length > 0),
  efeitos: fc.string({ minLength: 1, maxLength: 80 }).filter(s => s.trim().length > 0),
  era: fc.string({ minLength: 1, maxLength: 30 }).filter(s => s.trim().length > 0),
  lightDark: fc.string({ minLength: 1, maxLength: 30 }).filter(s => s.trim().length > 0),
});

const promptArbitrary = fc.record({
  header: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
  estilo: estiloArbitrary,
  aiPromptKeywords: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
  cssTechnical: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
  designSystemVariables: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
  checklist: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
  regrasDeExecucao: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
});

/**
 * Gera um objeto de estilo válido com um ID específico.
 */
const styleObjectWithId = (id) =>
  fc.record({
    id: fc.constant(id),
    name: fc.string({ minLength: 1, maxLength: 60 }).filter(s => s.trim().length > 0),
    type: fc.constantFrom('General', 'Landing Page', 'BI/Analytics', 'Infographic'),
    prompt: promptArbitrary,
  });

/**
 * Gera um array de objetos de estilo com IDs únicos (1..N).
 */
const uniqueStylesArrayArbitrary = fc
  .integer({ min: 1, max: 30 })
  .chain(count =>
    fc.tuple(...Array.from({ length: count }, (_, i) => styleObjectWithId(i + 1)))
  );

describe('Propriedade 4: Busca no cache retorna prompt correto', () => {
  /**
   * **Validates: Requirements 3.1, 3.4**
   *
   * Para qualquer ID válido presente no cache, getPrompt(id) deve
   * retornar exatamente o objeto prompt associado àquele ID.
   */
  it('getPrompt(id) deve retornar o prompt correto para qualquer ID válido no cache', () => {
    fc.assert(
      fc.property(uniqueStylesArrayArbitrary, (styles) => {
        const loader = createDataLoader(styles);

        for (const original of styles) {
          const prompt = loader.getPrompt(original.id);

          expect(prompt).not.toBeNull();
          expect(prompt).toEqual(original.prompt);
          expect(prompt.header).toBe(original.prompt.header);
          expect(prompt.estilo).toEqual(original.prompt.estilo);
          expect(prompt.aiPromptKeywords).toBe(original.prompt.aiPromptKeywords);
          expect(prompt.cssTechnical).toBe(original.prompt.cssTechnical);
          expect(prompt.designSystemVariables).toBe(original.prompt.designSystemVariables);
          expect(prompt.checklist).toBe(original.prompt.checklist);
          expect(prompt.regrasDeExecucao).toBe(original.prompt.regrasDeExecucao);
        }
      }),
      { numRuns: 100, verbose: true }
    );
  });

  /**
   * **Validates: Requirements 3.1, 3.4**
   *
   * Para qualquer ID não presente no cache, getPrompt(id) deve retornar null.
   */
  it('getPrompt(id) deve retornar null para qualquer ID não presente no cache', () => {
    fc.assert(
      fc.property(
        uniqueStylesArrayArbitrary,
        fc.integer({ min: 50, max: 9999 }),
        (styles, randomId) => {
          const loader = createDataLoader(styles);
          const maxId = styles.length; // IDs vão de 1 a N

          // Garante que o ID gerado não está no cache
          if (randomId <= maxId) return; // pula iterações onde o ID colide

          const prompt = loader.getPrompt(randomId);
          expect(prompt).toBeNull();
        }
      ),
      { numRuns: 100, verbose: true }
    );
  });

  /**
   * **Validates: Requirements 3.1, 3.4**
   *
   * Para qualquer ID válido presente no cache, getStyle(id) deve
   * retornar o objeto estilo completo (id, name, type, prompt).
   */
  it('getStyle(id) deve retornar o objeto estilo completo para qualquer ID válido no cache', () => {
    fc.assert(
      fc.property(uniqueStylesArrayArbitrary, (styles) => {
        const loader = createDataLoader(styles);

        for (const original of styles) {
          const style = loader.getStyle(original.id);

          expect(style).not.toBeNull();
          expect(style).toEqual(original);
          expect(style.id).toBe(original.id);
          expect(style.name).toBe(original.name);
          expect(style.type).toBe(original.type);
          expect(style.prompt).toEqual(original.prompt);
        }
      }),
      { numRuns: 100, verbose: true }
    );
  });

  /**
   * **Validates: Requirements 3.1, 3.4**
   *
   * Para qualquer ID não presente no cache, getStyle(id) deve retornar null.
   */
  it('getStyle(id) deve retornar null para qualquer ID não presente no cache', () => {
    fc.assert(
      fc.property(
        uniqueStylesArrayArbitrary,
        fc.integer({ min: 50, max: 9999 }),
        (styles, randomId) => {
          const loader = createDataLoader(styles);
          const maxId = styles.length;

          if (randomId <= maxId) return;

          const style = loader.getStyle(randomId);
          expect(style).toBeNull();
        }
      ),
      { numRuns: 100, verbose: true }
    );
  });
});
