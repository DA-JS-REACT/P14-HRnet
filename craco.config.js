const path = require("path")

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
        plugins: {
            add: [
                new webpack.DefinePlugin({
                    "process.env.NODE_ENV": JSON.stringify("production"),
                }),
            ],
        },
    },
}
