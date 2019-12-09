#!/usr/bin/env node

'use strict';

// [START gae_node_request_example]
const express = require('express');

const app = express();

app.get('/helloworld', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});

app.use('/', express.static(__dirname + '/'));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
