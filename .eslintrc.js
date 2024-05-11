module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['react', '@stylistic', 'sort-destructure-keys'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-sort-props': [
      'warn',
      { ignoreCase: true, callbacksLast: false, shorthandFirst: false },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
        allowSeparatedGroups: true,
      },
    ],
    'no-console': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: false,
        natural: true,
        allowLineSeparatedGroups: true,
      },
    ],
    yoda: 'error',
    '@stylistic/comma-style': ['error', 'last'],
    '@stylistic/comma-dangle': ['warn', 'always-multiline'],
    '@stylistic/arrow-parens': ['warn', 'always'],
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      { caseSensitive: false },
    ],
  },
};
