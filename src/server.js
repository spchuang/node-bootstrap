// @flow

'use strict';

const express = require('express');
const bodyParser = require('body-parser');

function makeServer(): void {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // configure routes with node app
  const server = app.listen(5000, function() {
    console.log('Listening on port %s...', server.address().port);
  });

  return server;
}

module.exports = makeServer;
