'use strict';

const
    WebpackDevServer = require('webpack-dev-server'),
    webpack = require('webpack'),
    path = require('path'),
    config = require('../config'),
    webpackConfig = require('../build/webpack.dev.conf'),
    compiler = webpack(webpackConfig);

const app = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../src/'), //默认会以根文件夹提供本地服务器，这里指定文件夹
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    port: config.Server.port, //如果省略，默认8080
    publicPath: '/',
    inline: true
});

app.listen(config.Server.port, 'localhost', err => {
    if (err) throw err;
    console.log(`Listening on http://${config.Server.wholePath()}`);
});