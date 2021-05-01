var http=require('http')
var fs=require('fs');


http.createServer(function(req,res){
    fs.open('demo.txt', 'r', function (err, f) {
    if (err)
    throw err
    else
    http.write('read the file');
})
}).listen(3004);