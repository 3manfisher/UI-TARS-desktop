import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import tsconfigPath from 'vite-tsconfig-paths';
import { defineProject } from 'vitest/config';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineProject({
  root: './',
  test: {
    globals: true,
    setupFiles: [resolve(__dirname, '../../scripts/vitest-setup.ts')],
    environment: 'node',
    includeSource: [resolve(__dirname, '.')],
  },

  plugins: [
    tsconfigPath({
      projects: ['../../tsconfig.node.json'],
    }),
  ],
});
