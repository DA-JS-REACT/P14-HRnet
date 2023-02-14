const path = require("path")

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
}

// paths: {
//     build: path.resolve(__dirname, "build"),
// },
// publicPath: process.env.NODE_ENV === "production" ? "/P14-HRnet/" : "/",
