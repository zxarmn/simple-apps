const mysql = require('mysql')

// Connect database
const connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'peserta',
  password: 'password',
  database: 'training'
})

module.exports = connection