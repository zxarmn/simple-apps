const mysql = require('mysql')

// Connect database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'peserta',
  password: 'password',
  database: 'training'
})

module.exports = connection