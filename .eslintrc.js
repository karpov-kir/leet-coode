module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['simple-import-sort'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    // To enforce using type for object type definitions, can be type or interface
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
