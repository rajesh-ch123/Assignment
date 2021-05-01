var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "root",  
database: "Ltts"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql = "CREATE TABLE product (pid INT, pname VARCHAR(30),price INT)";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table created");  
});  
});  