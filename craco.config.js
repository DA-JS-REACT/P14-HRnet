/* eslint-disable */
const path = require("path")

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    jest: {
        configure: {
            roots: ["<rootDir>/src", "<rootDir>/spec"],
            testMatch: ["<rootDir>/spec/**/*.{spec,test}.{js,jsx,ts,tsx}"],
        },
    },
    // jest: {
    //     configure: {
    //         moduleNameMapper: {
    //             "^@/(.*)$": "<rootDir>/src/$1",
    //         },
    //         transform: {
    //             "^.+\\.js$": "babel-jest",
    //         },
    //     },
    //     babel: {
    //         presets: ["@babel/preset-env"],
    //         plugins: ["@babel/plugin-transform-modules-commonjs"],
    //     },
    // },
}
