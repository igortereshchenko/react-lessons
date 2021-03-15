var path = require('path')


module.exports = {

entry:'./app/app.js',
output:{
    path: path.resolve(__dirname,'./public'),
    publicPath: '/public/',
    filename: 'bundle.js'

},

devServer:{
    port:7777,
    open:true,
    historyApiFallback: true
},


module:{
    rules:[
        {
            test: /\.jsx?$/,
            exclude : /(node_modules)/,
            loader:"babel-loader",
            options:{
                presets:["@babel/preset-env", "@babel/preset-react"]
            }
        }
    ]
}

}