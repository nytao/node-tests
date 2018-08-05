const express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Tao'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Tao',
      title: 'Scientist'
    }, {
      name: 'Andrew',
      title: 'Engineer'
    }, {
      name: 'Katherine',
      title: 'Lover'
    }
  ]);
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}...`);
});

exports.app = app;
