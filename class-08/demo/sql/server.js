'use strict';

//load environment variables
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;
const pg = require('pg');

app.use(cors());

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', err => console.error(err));


app.get('/', (request, response) => {
  response.status(200).send('Hello World, we are good here');
});

app.get('/add', (request, response)=> {
  let firstName = request.query.first;
  let lastName = request.query.last;
  let SQL = 'INSERT INTO people (first_name, last_name) VALUES($1, $2)';
  let safeValues = [firstName, lastName];
  client.query(SQL, safeValues)
    .then( results => {
      response.status(200).json(results);
    })
    .catch( error => errorHandler(error));

});

app.get('/people', (bob, charlie) => {
  let SQL = 'SELECT * FROM people';
  client.query(SQL)
    .then( results => {
      charlie.status(200).json(results.rows);
    })
    .catch(error => errorHandler(error));
})


//Error Handler Routes
app.use('*', notFoundHandler);
app.use(errorHandler);

function notFoundHandler(request, response) {
  response.status(404).send('huh?');
}

function errorHandler(error, request, response) {
  response.status(500).send(error);
}

client.connect()
  .then( ()=> {
    app.listen(PORT, ()=> {
      console.log('server and db are up, listening on port ', PORT);
    });
  });

