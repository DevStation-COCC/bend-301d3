'use strict';

const express = require('express');

const app = express();

// Use this as a talking point about environment variables
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
// Set the view engine for templating
app.set('view engine', 'ejs');

// Array of groceries for /list route
let list = ['apples', 'celery', 'butter', 'milk', 'eggs'];

// Array of quantities for /details route
let quantities = [
  {name: 'apples', quantity: 4},
  {name: 'celery', quantity: 1},
  {name: 'butter', quantity: 1},
  {name: 'milk', quantity: 2},
  {name: 'eggs', quantity: 12}
]
let coolstuff = [
  {name: 'drones', type: 'racing', quantity: 15},
  {name: 'computers', type: 'laptops', quantity: 4},
  {name: 'hats', type: 'baseball', quantity: 25}
]

// Routes
app.get('/', (request, response) => {
  response.render('index');
})

app.get('/list', (request, response) => {
  response.render('list', {arrayOfItems: list});
})

app.get('/quantities', (request, response) => {
  response.render('quantities', {groceryObjects: quantities});
})

app.get('/mycoolpage', (request, response) => {
  response.render('coolstuff', {coolstuffObjects: coolstuff})
})

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
