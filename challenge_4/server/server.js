const express = require('express');
const path = require('path'); //from Node
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  console.log('Hello World')
})


app.listen(3000, () => console.log('Good work Jordan, express is listening on 3000'));
