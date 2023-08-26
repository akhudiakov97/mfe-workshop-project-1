const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    mode: 'development',
    devServer: {
        port: 6061
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'list',
            filename: 'remoteEntry.js',
            exposes: {
                './ListIndex': './src/bootstrap'
            },
            shared: ['faker']
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}