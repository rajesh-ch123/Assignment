var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "root",  
database: "Ltts"  
});  
con.connect(function(err) {  
if (err) throw err;  
var sql = "DELETE FROM produdt WHERE pid =10";  
con.query(sql, function (err, data) {  
if (err) throw err;  
console.log("Number of records deleted: " + data.affectedRows);  
});  
});  