var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  else
  http.write("file deleted");
})
}).listen(3003);