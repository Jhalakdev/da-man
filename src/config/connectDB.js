const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'tirangagame',
    password: 'tirangagame',
    database: 'tirangagame',
});

export default connection;