const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    devServer: {
        port: 9000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Your App',
            template: './src/template.html',
            minify: {
                collapseWhitespace: false
            },
            hash: true
       }),
       new ExtractTextPlugin("styles.css")
    ]
}
