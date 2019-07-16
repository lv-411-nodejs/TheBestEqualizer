module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    describe: false,
    jest: false,
    it: false,
    expect: false,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: "babel-eslint",
  plugins: [
    'react',
  ],
  rules: {
    "eslint linebreak-style": [0, "error", "windows"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }],
    "react/require-default-props": "off",
    "react/no-array-index-key": 'off',
    "no-param-reassign": [2, {"props": false}],
    "jsx-a11y/label-has-for": [ 2, {
      "required": {
        "every": [ "id" ]
      }
    }],
    "react/button-has-type": 'off',
    "react/destructuring-assignment": 'off',
    'no-shadow': [
        'error',
        {
            allow: ['setVisibility'],
        },
    ],
    "import/prefer-default-export": "off",
    "react/no-access-state-in-setstate": 0
  },
};
