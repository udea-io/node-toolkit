module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
    useJSXTextNode: false,
  },

  extends: [
    './index',
    'airbnb/hooks',
    'plugin:react/recommended'
  ],

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'babel-plugin-root-import': {
        rootPathPrefix: '~/',
        rootPathSuffix: 'src/',
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
  },

  rules: {
    'react/jsx-filename-extension': 0,

    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],

    // prop spreading is dangerous but has its use cases
    'react/jsx-props-no-spreading': 1,

    // prefer arrow functions for defining components
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // prefer arrow functions for defining components
    'no-unused-var': [
      1,
      {
        ign: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'react/jsx-uses-react': 0,

    'react/react-in-jsx-scope': 0,
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 0,
      },
    },
  ],
};
