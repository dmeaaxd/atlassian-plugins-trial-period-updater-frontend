import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';
import styleLintPrettier from 'stylelint-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierRecommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    plugins: {
      'import': importPlugin,
      // "jsx-a11y",
      // "react-hooks",
      // "@typescript-eslint",
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],

      'sort-imports': 'off',
      'import/export': 'off',
      'import/named': 'off',
      'import/order': 'off',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/no-cycle': 'off',
    },
  },
]);
