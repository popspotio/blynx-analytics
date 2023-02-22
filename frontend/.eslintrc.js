module.exports = {
  extends: "next/core-web-vitals",
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "sort-destructure-keys",
    "typescript-sort-keys",
  ],
  root: true,
  rules: {
    "@next/next/no-img-element": 0,
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/member-delimiter-style": ["error"],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "_", varsIgnorePattern: "_" }],
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
    "@typescript-eslint/semi": "error",
    "arrow-parens": "error",
    "eol-last": ["error"],
    eqeqeq: ["error"],
    "import/no-extraneous-dependencies": "error",
    "import/no-unresolved": "error",
    "max-len": ["error", { code: 140, ignoreComments: true, ignoreStrings: true }],
    "no-console": "error",
    "no-useless-return": ["error"],
    "object-curly-newline": ["error", { consistent: true }],
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": ["error"],
    "quote-props": ["error", "as-needed"],
    "react/jsx-closing-bracket-location": ["error"],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-key": ["error", { checkFragmentShorthand: true }],
    "react/jsx-max-props-per-line": ["error", { when: "multiline" }],
    "react/jsx-one-expression-per-line": ["error", { allow: "single-child" }],
    "react/jsx-sort-props": "error",
    "react/jsx-tag-spacing": "error",
    "react/jsx-wrap-multilines": ["error"],
    "sort-destructure-keys/sort-destructure-keys": ["error"],
    "sort-keys": "error",
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
  },
};
