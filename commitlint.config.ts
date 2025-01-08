// import { UserConfig } from "@commitlint/types";

// const config: UserConfig = {
//   extends: ["@commitlint/config-conventional"],
//   rules: {
//     "type-enum": [
//       2,
//       "always",
//       ["feat", "fix", "chore", "docs", "refactor", "build"],
//     ],
//   },
// };

// export default config;
import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "chore", "docs", "refactor", "build"],
    ],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
  },
};

module.exports = Configuration;
