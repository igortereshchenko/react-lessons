
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry:'./main.js',
    output:{
        path: path.join(__dirname,'/bundle'),
        filename: 'index_bundle.js'

    },

    devServer:{
        inline:true,
        port: 7777
    },

    plugins:[
        new HtmlWebpackPlugin( {template: './index.html'}  )
    ],

    module:{
        rules:[
                {
                    loader:'babel-loader',
                    exclude:/node_modules/,
                }
            ]
        }

}