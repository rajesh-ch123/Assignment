
// insert the single document
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/Ltts";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var docs = { empId: "100", empname: "rajesh", address: "Ap" };  
db.collection("emp").insertOne(docs, function(err, res) {  
if (err) throw err;  
console.log("one document inserted");  
db.close();  
});  
});

//// insert multiple  documents
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ MongoDatabase";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var doc = [     
{ empId: "101", empname: "ajay", address: "Telagana" },  
{ empId: "102", empname: "Dinesh", address: "Karnataka" },    
];  
db.collection("customers").insert(doc, function(err, res) {  
db.close();  
});  
});  