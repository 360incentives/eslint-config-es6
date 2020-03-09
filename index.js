module.exports = {
  env: {
    es6: true
  },
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', { before: true, after: false }],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'off',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'off',
    'symbol-description': 'error',
    strict: ['error', 'global'],
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', { before: false, after: true }]
  }
};
