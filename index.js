module.exports = {
  env: {
    es6: true
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', { before: true, after: false }],
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'strict': ['error', 'global']
  }
};
