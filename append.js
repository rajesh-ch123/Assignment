var http=require('http')
var fs=require('fs');
const { writeFile } = require('node:fs');

var server=http.createServer(function(req,res){
fs.appendFile('hello1.txt','Welcome to Rajesh',function(err){
    if (err)
    throw err
    else
console.log("saved");
})
});
server.listen(8567);