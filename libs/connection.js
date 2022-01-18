const mysql = require('mysql2');
const cTable = require('console.table');

// Create Connection
const db_config = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root5005101',
    database: 'employeeTracker_db',
    port: 3306
};

module.exports = db_config;