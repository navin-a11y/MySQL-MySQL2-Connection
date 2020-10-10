const mysql = require('mysql');

const options = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

const connection = mysql.createConnection(options);

connection.connect(function(err) {
    if(err) throw err;
    console.log("Node JS is connected to MySQL");
})

module.exports = connection;