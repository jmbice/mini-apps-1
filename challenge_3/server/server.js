const path = require('path');
const express = require('express');
const db = require('../db/mysqlConnect.js');
const app = express();

app.use('/', express.static(path.join(__dirname, '../client/public')))

//middleware
app.use(function(req, res, next){
  console.log( req.method, req.path );
  next();
});

//get request
app.get('/get', (req, res) => {
  db.query('SELECT * FROM user_login', function (error, results) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
});

//post request
app.post('/post', (req, res) => {
  db.query('INSERT INTO user_login (name, email, password) VALUES ("Jordan", "jmbice@gmail", "nope");', function(err, results) {
    if (err) throw err;
    console.log('Insert of data was successful! Noice!');
  });
})
///goes here


app.listen(3000, () => console.log('Example app listening on port 3000!'));
