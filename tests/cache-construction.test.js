/**
 * Teste de propriedade: Construção correta do cache por ID
 *
 * Propriedade 3: Para qualquer array válido de objetos de estilo,
 * construir o cache em memória deve resultar em um mapa onde cada ID
 * presente no array original mapeia para o objeto correspondente com
 * todos os campos intactos (incluindo o prompt estruturado).
 *
 * **Validates: Requirements 2.2**
 */

import { describe, it, expect } from 'vitest';
import fc from 'fast-check';

// --- Lógica de construção do cache (espelha DataLoader.init) ---

/**
 * Constrói o cache em memória a partir de um array de objetos de estilo,
 * usando a mesma lógica do DataLoader no index.html.
 *
 * @param {Array} data - Array de objetos de estilo
 * @returns {{ cache: Object, styles: Array }} Cache indexado por ID e array ordenado
 */
function buildCache(data) {
  const cache = {};
  data.forEach(item => {
    cache[item.id] = item;
  });
  const styles = [...data].sort((a, b) => a.id - b.id);
  return { cache, styles };
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
 * IDs únicos garantem que o cache não sobrescreve entradas.
 */
const uniqueStylesArrayArbitrary = fc
  .integer({ min: 1, max: 30 })
  .chain(count =>
    fc.tuple(...Array.from({ length: count }, (_, i) => styleObjectWithId(i + 1)))
  );

describe('Propriedade 3: Construção correta do cache por ID', () => {
  /**
   * **Validates: Requirements 2.2**
   *
   * Para qualquer array de objetos de estilo com IDs únicos,
   * o cache deve conter exatamente o mesmo número de entradas
   * que o array de entrada.
   */
  it('o cache deve ter o mesmo número de entradas que o array de entrada', () => {
    fc.assert(
      fc.property(uniqueStylesArrayArbitrary, (styles) => {
        const { cache } = buildCache(styles);
        const cacheKeys = Object.keys(cache);

        expect(cacheKeys.length).toBe(styles.length);
      }),
      { numRuns: 100, verbose: true }
    );
  });

  /**
   * **Validates: Requirements 2.2**
   *
   * Para qualquer array de objetos de estilo com IDs únicos,
   * cada ID presente no array original deve existir como chave no cache
   * e mapear para o objeto correspondente com todos os campos intactos.
   */
  it('cada ID do array original deve mapear para o objeto correspondente no cache com todos os campos intactos', () => {
    fc.assert(
      fc.property(uniqueStylesArrayArbitrary, (styles) => {
        const { cache } = buildCache(styles);

        for (const original of styles) {
          const cached = cache[original.id];

          // O ID deve existir no cache
          expect(cached).toBeDefined();

          // Campos de nível raiz intactos
          expect(cached.id).toBe(original.id);
          expect(cached.name).toBe(original.name);
          expect(cached.type).toBe(original.type);

          // Prompt estruturado intacto
          expect(cached.prompt).toBeDefined();
          expect(cached.prompt.header).toBe(original.prompt.header);
          expect(cached.prompt.aiPromptKeywords).toBe(original.prompt.aiPromptKeywords);
          expect(cached.prompt.cssTechnical).toBe(original.prompt.cssTechnical);
          expect(cached.prompt.designSystemVariables).toBe(original.prompt.designSystemVariables);
          expect(cached.prompt.checklist).toBe(original.prompt.checklist);
          expect(cached.prompt.regrasDeExecucao).toBe(original.prompt.regrasDeExecucao);

          // Subcampos do estilo intactos
          expect(cached.prompt.estilo).toEqual(original.prompt.estilo);
          expect(cached.prompt.estilo.nome).toBe(original.prompt.estilo.nome);
          expect(cached.prompt.estilo.tipo).toBe(original.prompt.estilo.tipo);
          expect(cached.prompt.estilo.keywords).toBe(original.prompt.estilo.keywords);
          expect(cached.prompt.estilo.coresPrimarias).toBe(original.prompt.estilo.coresPrimarias);
          expect(cached.prompt.estilo.coresSecundarias).toBe(original.prompt.estilo.coresSecundarias);
          expect(cached.prompt.estilo.efeitos).toBe(original.prompt.estilo.efeitos);
          expect(cached.prompt.estilo.era).toBe(original.prompt.estilo.era);
          expect(cached.prompt.estilo.lightDark).toBe(original.prompt.estilo.lightDark);

          // Igualdade profunda completa
          expect(cached).toEqual(original);
        }
      }),
      { numRuns: 100, verbose: true }
    );
  });

  /**
   * **Validates: Requirements 2.2**
   *
   * O array `styles` retornado pelo buildCache deve estar ordenado
   * por ID em ordem crescente, conforme a lógica do DataLoader.
   */
  it('o array styles deve estar ordenado por ID em ordem crescente', () => {
    fc.assert(
      fc.property(uniqueStylesArrayArbitrary, (inputStyles) => {
        const { styles } = buildCache(inputStyles);

        expect(styles.length).toBe(inputStyles.length);

        for (let i = 1; i < styles.length; i++) {
          expect(styles[i].id).toBeGreaterThan(styles[i - 1].id);
        }
      }),
      { numRuns: 100, verbose: true }
    );
  });
});
