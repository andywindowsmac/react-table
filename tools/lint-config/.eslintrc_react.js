const config = require('./.eslintrc')

const newConfig = {
  ...config,
  extends: [
    'airbnb',
    'plugin:react/recommended',
    ...config.extends,
  ],
  plugins: [
    'prettier',
    'react',
    'import',
    ...config.plugins,
  ],
  rules: {
    ...config.rules,
    'filenames/match-exported': 0,
    'prettier/prettier': 1,
    'react/jsx-indent': 1,
    'react/jsx-closing-tag-location':1,
    'react/jsx-props-no-multi-spaces':1,
    'react/jsx-indent-props':1,
    'react/jsx-tag-spacing':1,
    'no-trailing-spaces': 1,
    '@typescript-eslint/member-delimiter-style':0,
    '@typescript-eslint/type-annotation-spacing':1,
    'indent': ['off'],
    'import/order': [1, {
      'newlines-between': 'always',
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true,
      },
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      'pathGroupsExcludedImportTypes': ['builtin'],
      'pathGroups': [{
        'pattern': '@Store/**',
        'group': 'internal',
      }, {
        'pattern': '@Config/**',
        'group': 'internal',
      }, {
        'pattern': '@Utils/**',
        'group': 'internal',
      }, {
        'pattern': '@Components/**',
        'group': 'internal',
      }, {
        'pattern': '@Navigation/**',
        'group': 'internal',
      }, {
        'pattern': '@Styles/**',
        'group': 'internal',
      }, {
        'pattern': '@Images/**',
        'group': 'internal',
      }, {
        'pattern': '@Mocks/**',
        'group': 'internal',
      }, {
        'pattern': '@Graphql/**',
        'group': 'internal',
      }, {
        'pattern': '@Hoc/**',
        'group': 'internal',
      }, {
        'pattern': '@Routes/**',
        'group': 'internal',
      }, {
        'pattern': '@Hooks/**',
        'group': 'internal',
      }],
    }],
    'max-lines': ['error', {
      max: 600,
    }],
    'camelcase': ['off'],
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
    '@typescript-eslint/camelcase': ['off'],
    // Could turn this on, as gives useful/annoying warnings.
    '@typescript-eslint/no-explicit-any': ['off'],
    // Same as no-explicit-any
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'react/jsx-filename-extension': ['error', {
      'extensions': ['.jsx', '.tsx'],
    }],
    'react/jsx-props-no-spreading': ['off'],
    'react/destructuring-assignment': ['off'],
    'padded-blocks': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    'arrow-body-style': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'no-confusing-arrow': ['off'],
    'operator-linebreak': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    'import/prefer-default-export': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    "import/no-extraneous-dependencies": ["off", { "devDependencies": false, "optionalDependencies": false, "peerDependencies": false }],
    'arrow-parens': ['off'],
    'react/prop-types': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'react/jsx-boolean-value': ['off'],
    'no-underscore-dangle': ['off'],
    'react/button-has-type': ['off'],
    'react/no-array-index-key': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/no-autofocus': ['off'],
    'react/jsx-wrap-multilines': ['off'],
    'spaced-comment': ['off'],
    'react/display-name': ['off'],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
    'prefer-promise-reject-errors': ['off'],
  },
}

module.exports = newConfig
