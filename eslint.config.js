import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import babelParser from '@babel/eslint-parser'

import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'

const ignores = [
  // dependencies / build artifacts
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/coverage/**',

  // logs
  '**/*.log',
  '**/npm-debug.log*',

  // VCS / IDE
  '**/.git/**',
  '**/.idea/**',
  '**/.vscode/**',

  // OS-specific junk
  '**/.DS_Store',
  '**/Thumbs.db',
  '**/.directory',
  '**/*~',
  '**/*.swp',
  '**/*.swo',
]

const commonPlugins = {
  'jsx-a11y': jsxA11yPlugin,
  react: reactPlugin,
}

/**
  * Ещё правила для rules
  * https://eslint.org/docs/latest/rules/
*/
const commonRules = {
  ...js.configs.recommended.rules,
  ...jsxA11yPlugin.configs.recommended.rules,

  'react/jsx-uses-vars': 'error',
  'react/jsx-uses-react': 'off',

  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'eqeqeq': 'warn',
  'curly': 'warn',
  'no-else-return': 'warn',

  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ],
  'jsx-a11y/media-has-caption': 'warn',
  'jsx-a11y/no-noninteractive-tabindex': 'warn',

  'prefer-const': 'warn',
}

export default defineConfig([
  { 
    files: ["**/*.{js,jsx,mjs,cjs}"],
    ignores,
    languageOptions: { 
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          plugins: ['@babel/plugin-syntax-jsx'],
        },
      },
      globals: globals.browser,
    },
    plugins: commonPlugins,
    rules: commonRules,
  },
]);
