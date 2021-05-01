var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)
    throw err;
    else
    var dbo=db.db("ajaydb");
    dbo.createCollection("emp",function(err,res){
        if(err)
        throw err;
        else
        console.log("collection is created")
    });
});