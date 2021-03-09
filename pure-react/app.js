const http  =require('http')
const fs = require('fs')

http.createServer(function(request, response){

    let path = 'index.html';
    fs.readFile(path, function(error, data){

        response.end(data);
    })

}).listen(8000, function(){
    console.log('Started on 8000 ')
});