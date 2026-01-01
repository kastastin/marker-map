import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    plugins: {
      perfectionist,
    },
    rules: {
      "import/order": "off",
      "sort-imports": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          type: "line-length",
          order: "asc",
          newlinesBetween: 1, // blank line between groups
          groups: [
            ["value-builtin", "value-external"],
            "value-internal",
            ["value-parent", "value-sibling", "value-index"],
            "ts-equals-import",
            "side-effect",
            "style",
            "type-import",
            "unknown",
          ],
          tsconfig: {
            rootDir: ".", // Consider "@/..." as internal
          },
        },
      ],
    },
  },
]);
