var http = require('http');  
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/Ltts";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var deleteDocs= { empId: "100" };  
db.collection("emp").deleteOne(deleteDocs, function(err, obj) {  
if (err) throw err;  
console.log(obj.result.n + " record(s) deleted");  
db.close();  
});  
});  
