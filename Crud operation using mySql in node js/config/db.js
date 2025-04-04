const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'CRM',
    port: 3306
}).promise(); 

db.getConnection()
    .then(() => console.log("MySQL Connected"))
    .catch(err => console.error("MySQL Connection Error:", err));

module.exports = db;
