'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained',
    name: 'Calvin\'s dog, Sadie',
    school: 'ACME School of Airplane Flying'
  }
  response.status(200).json(airplanes);
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'))

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
