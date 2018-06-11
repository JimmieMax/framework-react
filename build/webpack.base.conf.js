const path = require('path');

module.exports = {
    //设置入口文件
    entry: {
        app: ['./src/app/main.js']
    },
    //出口文件
    output: {
        //根据config模块得知是根目录下的dist文件夹
        path: path.join(__dirname, '../dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.scss'],
        alias: {
            //精准匹配，使用vue来替代vue/dist/vue.esm.js路径
            'vue$': 'vue/dist/vue.esm.js',
            //使用@替代src路径，当你引入src下的文件是可以使用import xx from "@/XX.js"
            '@': path.resolve(__dirname, '../src'),
        }
    },
    mode: 'none'
};
