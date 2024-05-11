module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@stylistic', 'sort-destructure-keys', 'perfectionist'],
  rules: {
    '@stylistic/arrow-parens': ['warn', 'always'],
    '@stylistic/comma-dangle': ['warn', 'always-multiline'],
    '@stylistic/comma-style': ['error', 'last'],
    'import/extensions': ['error', { js: 'never' }],
    'import/no-unresolved': 'error',
    'import/order': [
      'warn',
      {
        groups: [
          'external',
          ['builtin', 'internal'],
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'no-console': 'warn',
    'no-var': 'error',
    'perfectionist/sort-object-types': ['warn', { 'ignore-case': true }],
    'prefer-const': 'error',
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-sort-props': [
      'warn',
      { callbacksLast: false, ignoreCase: true, shorthandFirst: false },
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      { caseSensitive: false },
    ],
    'sort-imports': [
      'warn',
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
      },
    ],
    'sort-keys': [
      'warn',
      'asc',
      {
        allowLineSeparatedGroups: true,
        caseSensitive: false,
        natural: true,
      },
    ],
    yoda: 'error',
  },
};
