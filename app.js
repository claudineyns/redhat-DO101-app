const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(8080, () => console.log('App started on port 8080'));
