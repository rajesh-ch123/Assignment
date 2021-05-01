var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/Ltts";  
MongoClient.connect(url, function(err, db) {  
  if (err) throw err;  
  db.collection("emp").find({}).toArray(function(err, data) {  
    if (err) throw err;  
    console.log(data);  
    db.close();  
  });  
});  