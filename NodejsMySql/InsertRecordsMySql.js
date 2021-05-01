// insert Single records
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
var sql = "INSERT INTO employees (pid, pname,price) VALUES ('10', 'laptop',2000)";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
});  