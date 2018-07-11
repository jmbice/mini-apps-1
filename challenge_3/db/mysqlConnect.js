var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'checkout'
});

connection.connect(() => console.log('Jordan, connected to mysql!'));

module.exports = connection;
