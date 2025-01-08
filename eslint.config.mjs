import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    env: {
      node: true, // Node.js 환경을 추가
      es2021: true, // 최신 ES 문법 사용 가능
    },
    rules: {
      // 규칙들 추가
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
