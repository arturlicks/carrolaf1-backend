import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: [".config", "build", "dist"],
  },
  { files: ["**/*.{js,mjs,cjs}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      semi: ["error"],
      quotes: ["error", "double"],
    },
  },
];