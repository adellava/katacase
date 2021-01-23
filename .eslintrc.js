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
        "max-len": ["error", { "code": 80 }],
        "no-unused-vars": "error",
        "no-console": 2,
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
    }
};