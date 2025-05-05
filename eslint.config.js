import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import prettierConfig from 'eslint-config-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import solidPlugin from 'eslint-plugin-solid'
import globals from 'globals'

export default defineConfig([
  // base
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2025,
      },
    },
    env: {
      browser: true,
      es2025: true,
    },
  },

  // JS
  js.configs.recommended,

  // Solid.js
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      solid: solidPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...solidPlugin.configs.recommended.rules,
      'solid/reactivity': 'warn',
      'solid/no-destructure': 'warn',
      'solid/jsx-no-undef': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  // prettier
  prettierConfig,
])
