/* eslint-disable */
module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "babel-preset-react-app",
        "@babel/preset-typescript",
    ],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                alias: {
                    "@": "./src",
                },
            },
        ],
    ],
}
