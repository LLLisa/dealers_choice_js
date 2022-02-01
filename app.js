const express = require('express');
const app = express();
const morgan = require('morgan');
const html = require('./public/html.js');

app.use(express.static('public')); //this line is magic and necessary

app.get('/', (req, res) => {
  res.send(html.main);
});

app.get('/data/:email', (req, res) => {
  res.send(html.detail(req.params.email));
});

app.use(morgan('dev'));
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
