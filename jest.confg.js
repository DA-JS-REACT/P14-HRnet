/* eslint-disable */
const cracoConfig = require("./craco.config.js")

module.exports = {
    preset: "react-app",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
            "<rootDir>/config/jest/fileTransform.js",
    },
    moduleNameMapper: {
        ...cracoConfig.jest.moduleNameMapper,
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    testMatch: [
        "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
        "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
    ],
    testEnvironment: "jsdom",
    testRunner: "jest-circus/runner",
}
