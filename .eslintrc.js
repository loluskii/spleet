module.exports = {
  root: false,
  env: {
    browser: false,
    node: false,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {},
  "vue/html-self-closing": [
    "error",
    {
      html: {
        void: "never",
        normal: "always",
        component: "always",
      },
      svg: "always",
      math: "always",
    },
  ],
};
