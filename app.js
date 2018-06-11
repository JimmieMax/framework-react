'use strict';

const Koa = require('koa')
    , path = require('path')
    , views = require('koa-views')
    , Static = require('koa-static')
    , config = require('./config');

const app = new Koa();

app
    .use(Static(path.resolve(__dirname, './dist')))
    .use(views(path.resolve(__dirname, './src')))
    .use(async (ctx,next) => {
        if (ctx.originalUrl == '/') {
            await ctx.render('/app')
        } else {
            await next();
        }
    })
    .listen(config.Server.port, () => {
        console.info(`listening on port ${config.Server.port}`);
    });