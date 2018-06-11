const
    path = require('path'),
    webpack = require('webpack'),
    Merge = require('webpack-merge'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    config = require('../config'),
    baseConfig = require('./webpack.base.conf'),
    wholePath = config.Server.wholePath();

module.exports = Merge(baseConfig, {
    entry: {
        app: [
            `webpack-dev-server/client?http://${wholePath}`,//资源服务器地址
            'webpack/hot/only-dev-server'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'react-hot',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                    }
                },
                include: path.join(__dirname, 'js')
            }
        ]
    },
    plugins: [
        //根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
        new webpack.optimize.OccurrenceOrderPlugin(),
        //模块热替换,如果不在dev-server模式下，需要记录数据，recordPath，生成每个模块的热更新模块
        new webpack.HotModuleReplacementPlugin(),
        //报错但不退出webpack进程
        new OpenBrowserPlugin({
            url: `http://${config.Server.host + ":" + config.Server.port}`
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'React',
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            chunks: ['app'],
            inject: true
        }),
    ],
    mode: 'development',
    devtool: 'source-map',
});