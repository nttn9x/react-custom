module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "warning",
      {
        allowExpressions: true
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "warning",
      {
        allowExpressions: true
      }
    ]
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ]
};
