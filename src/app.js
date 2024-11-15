// src/index.js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('v52-tier2-team-20 server is running');
});

module.exports = app