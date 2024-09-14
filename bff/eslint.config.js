import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nodePlugin from 'eslint-plugin-n';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  nodePlugin.configs['flat/recommended-script'],
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off', // Allow console statements
      'no-process-exit': 'off', // Allow process.exit() calls
      'prefer-const': 'error', // Enforce the use of const for variables that are never reassigned
      'no-var': 'error', // Disallow the use of var
    },
  },
];
