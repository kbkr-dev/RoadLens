import { defineConfig, globalIgnores } from "eslint/config";
import nextvitals from "eslint-config-next/core-web-vitals";
import nextts from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextvitals,
    ...nextts,
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;