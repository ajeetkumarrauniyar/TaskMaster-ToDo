// Importing necessary libraries and modules
const mysql = require('mysql');

// Creating a MySQL connection configuration object
const conn =  mysql.createConnection({
    host:'localhost',
    user: 'root',
    password : '',
    database :'TaskMaster'
});

// Connecting to the MySQL database
conn.connect ((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    }
    // If the connection is successful, log a message with the connected database name
    console.log('Connected to Database:' + conn.config.database); 
});

module.exports = conn; // Exporting the connection object