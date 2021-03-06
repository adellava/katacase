module.exports = {
    root: true,
    globals: {
        window: true,
        module: true
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    rules: { 
        "max-len": ["error", { "code": 160 }],
        "no-unused-vars": "error",
        "no-console": 2,
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],

        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars-experimental": "error",
        "no-unused-vars": "off"
    }
};