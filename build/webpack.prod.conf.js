const
    path = require('path'),
    merge = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    output: {
        //根据config模块得知是根目录下的dist文件夹
        path: path.join(__dirname, '../dist'),
        filename: 'static/js/[name].[chunkhash].js'
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React',
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true,
            chunks: ['app'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/static'),
                to:'static'
            }
        ]),
    ],
    mode: 'production',
});