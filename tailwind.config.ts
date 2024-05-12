const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            minHeight: {
                "full-without-header": "calc(100vh - 64px)",
            },
            maxHeight: {
                "full-without-header": "calc(100vh - 64px)",
            },
        },
    },
    plugins: [nextui(), require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
