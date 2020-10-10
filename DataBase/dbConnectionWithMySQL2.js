const mysql2 = require('mysql2/promise');

const options = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 6,
    waitForConnections: true
}

const connection = mysql2.createPool(options);

// connection.connect(function(err) {
//     if(err) throw err;
//     console.log("Node JS is connected to MySQL");
// })

module.exports = connection;