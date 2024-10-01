import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      }
    },
    plugins: {
      js: pluginJs,
      react: pluginReact
    },
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': 0,
      'import/prefer-default-export': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
];
