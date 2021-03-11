const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.readFile("index.html", function(error,data){

        res.end(data);
    })
}).listen(7070, function(){
    console.log('Started....');
})
