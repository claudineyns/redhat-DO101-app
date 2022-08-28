const express = require('express');
const app = express();

app.get('/info', (req, res) => {
  return res.json({version: '0.0.4-SNAPSHOT', ...process.env});
});

app.get('/', (req, res) => {
  return res.send('Welcome!');
});

app.listen(8080, () => console.log('App started on port 8080'));
