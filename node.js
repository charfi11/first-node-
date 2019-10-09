var http = require('http');
var url = require('url');
var adr = 'http://localhost:8080/index.html';
var fs = require('fs');
var pars = url.parse(adr, true);
console.log(pars);

var server = http.createServer(function(req, res) {
    var filename = "."+pars.pathname;
    fs.readFile(filename, function(err, data){
     if(err){
         res.writeHead(404, {'content-type':'error'})
         return res.end('404 not found');
     }
     res.writeHead(200, {'content-type': 'success'});
     res.write(data);
     return res.end();
    })
  res.writeHead(200);
});
server.listen(8080);