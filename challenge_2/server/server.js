const express = require('express');
const path = require('path');
const parse = require('body-parser');
const work = require('./work.js');
const app = express();


app.use(express.static(path.join(__dirname, '../client/public')));
app.use(parse.json());

//my middleware, to check if a get request is called
app.use('/', function(req, res, next){
  console.log('Jordan, an HTTP request has been made. Method, Path:', req.method, req.path);
  next();
})

//get request for /recieve calls get latest, unncessarily uses CB
app.get('/receive', (req, res) => {
  work.getLatest((err, success) => {
    if (err) {
      res.status(404).send(err);
      return ;
    } else {
      res.status(200).send(success);
    }
  });
});

//post request for /submit calls add data, unncessarily uses cb pattern
app.post('/submit', (req, res) => {
  if (!req.body){
    res.status(204).send('No input provided!');
    return ;
  }

  work.addData(req.body, (err, success) => {
    if (err) {
      res.status(204).send(err);
      return ;
    } else {
      res.status(200).send('Successfully posted!');
    }
  })
});


app.listen(3000, () => console.log('Good job Jordan, Express is listening on port 3000'));
// curl -d '{"name": "cake", "quantity":"1"}' -H 'Content-Type: application/json' http://localhost:3000/submit
