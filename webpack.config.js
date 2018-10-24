const webpack = require("webpack");
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
let env = process.env;
console.log(env.NODE_ENV)
let proxy = null;
let devtool = null;
let proxyDev = {
    '/api':{
        target: "http://share.json119.com",
        secure: true,
        changeOrigin: true,
        pathRewrite: { '^/api' : '' }
    }
}
let proxyProd = {
    '/api':{
        target: "http://share.json119.com",
        secure: true,
        changeOrigin: true,
        pathRewrite: { '^/api' : '' }
    }
}
if(env.NODE_ENV==="dev"){
    proxy = proxyDev;
    devtool = "cheap-module-eval-source-map";
}else if(env.NODE_ENV==="prod"){
    proxy = proxyProd;
    devtool = "cheap-module-eval-source-map";
}

module.exports = {
    entry: __dirname + '/src/index.js',//入口文件
    output: {
        path: __dirname + '/dist',//打包后的文件位置
        filename: 'index.js'//打包后的文件
    },
    devServer: {
        contentBase: './src',//默认本地服务器在跟目录
        historyApiFallback: true,//不跳转，默认会跳转且都跳到index.html上
        inline: true,//源文件改变时刷新页面
        hot: true,
        port: 8085//更改端口号，默认8080
        ,proxy
    },
    devtool,//好几种模式
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {presets: ["react", "es2015", "stage-0"]}
                }],
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',// 目标文件名,1.x 这个配置项为asset
            algorithm: 'gzip',// 使用gzip压缩
            test: /\.js$|\.html$/,
            threshold: 10240,// 资源文件大于10240B=10kB时会被压缩
            minRatio: 0.8 // 最小压缩比达到0.8时才会被压缩
        }),
        new copyWebpackPlugin([{
            from: __dirname +'/docs',//打包的静态资源目录地址
            to:'./docs' //打包到 dist 下面的public
        }]),
    ]
}
