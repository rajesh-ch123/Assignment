var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "root",  
database: "Ltts"  
});  
con.connect(function(err) {  
if (err) throw err;  
con.query("SELECT * FROM product", function (err, data) {  
if (err) throw err;  
console.log(data);  
});  
});  