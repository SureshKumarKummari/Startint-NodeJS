const mysql=require('mysql2');

const pool=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node',
    password: 'SUresh@1289'
});

let db=pool.promise();

module.exports=db;