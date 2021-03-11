var path = require('path')


module.exports = {

entry:'./app.jsx',
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
            
            exclude : /(node_modules)/,
            loader:"babel-loader",
            options:{
                presets:["@babel/preset-env", "@babel/preset-react"]
            }
        }
    ]
}

}