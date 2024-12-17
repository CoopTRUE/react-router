/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': ['warn', { groups: [['.*']] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': ['warn', { callbacksLast: true, shorthandFirst: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-empty-pattern': ['error', { allowObjectPatternsAsParameters: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
}
