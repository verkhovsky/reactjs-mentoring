module.exports = {
    mode: "development",
    devtool : 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { sourceMap: true, importLoaders: 1 }
                    },
                ]
            }
        ]
    },
    devServer: {
        port: 8080,
        open: true,
        host: 'localhost'
    }
}