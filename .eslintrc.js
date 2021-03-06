module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-extra-semi":"error",
    "no-debugger": 1,
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "no-unreachable": "off",
    "no-undef": "off"
  },
  overrides: [{
    "files": [ "./node-api" ],
    "rules": {
    }
  }]
};
