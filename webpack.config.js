var path = require('path');
var webpack = require('webpack')
module.exports = {
    entry: ["webpack/hot/dev-server", path.resolve(__dirname, './client/src/main.js')],
    output: {
        path: path.resolve(__dirname, './client/build'),
        filename: "build.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query:{
                presets:["es2015","stage-0","react"]
            }
        },
        { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}