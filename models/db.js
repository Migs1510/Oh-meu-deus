// models/db.js
const mysql = require('mysql2/promise');

// Altere essas informações com os dados do seu MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'delivery',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
