'use strict'

// Application Dependencies
const express = require('express');
const pg = require('pg');

// Environment variables
require('dotenv').config();
// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
// Utilize ExpressJS functionality to parse the body of the request
app.use(express.urlencoded({extended: true}));
// Specify a directory for static resources
app.use(express.static('./public'));

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// API Routes
app.get('/', getTasks);
app.get('/tasks/:task_id', getOneTask);
app.get('/add', showForm);
app.post('/add', addTask)
app.get('*', (req,res)=> res.status(404).send('this is not a valid route'));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));


// HELPER FUNCTIONS

function getTasks(request, response) {
  let SQL = 'SELECT * FROM tasks';

  return client.query(SQL)
    .then(results => response.render('index', {results: results.rows}))
    .catch(handleError);
  //get all tasks from the database
}

function getOneTask(request, response) {
  let SQL = 'SELECT * FROM tasks WHERE id=$1';
  let values = [request.params.task_id]
  return client.query(SQL, values)
    .then(results => {
      return response.render('pages/detail-view', {task: results.rows[0]});
    })
    .catch(handleError);
  //get a single task from the database
}

function showForm(request, response) {
  response.render('pages/add-view');
}

function addTask(request, response) {
  let { title, description, category, contact, status} = request.body;

  let SQL = 'INSERT INTO tasks(title, description, category, contact, status) VALUES($1, $2, $3, $4, $5)';
  let values = [title, description, category, contact, status];
  return client.query(SQL, values)
    .then(response.redirect('/'))
    .catch(handleError);

 //add a task
}

function handleError(error, response) {
  response.render('pages/error-view', {error: 'Uh Oh'});
}
