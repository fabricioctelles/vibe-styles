import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 600000, // 10 minutos para testes de propriedade com I/O
  },
});
