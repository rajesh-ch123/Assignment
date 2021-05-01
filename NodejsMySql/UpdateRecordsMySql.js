var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "root",  
database: "Ltts"  
});  
con.connect(function(err) {  
if (err) throw err;  
var sql = "UPDATE product SET price = 4000 WHERE pname = 'laptop'";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log(result.affectedRows + " record updated");  
});  
});  