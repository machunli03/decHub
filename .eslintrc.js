module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-strongly-recommended", "standard"],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "quotes": [1,'single'],
  },
  overrides: [
    {
      files: ["src/api/**/*.ts"],
      rules: {
        camelcase: "off",
      },
    },
  ],
};
