'use strict'

// Application Dependencies
//need express, pg

// Environment variables
//need dotenv
// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
// Utilize ExpressJS functionality to parse the body of the request
app.use(express.urlencoded({extended: true}));
// Specify a directory for static resources
app.use(express.static('./public'));

// Database Setup


// Set the view engine for server-side templating

// API Routes

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));


// HELPER FUNCTIONS

function getTasks(request, response) {

  //get all tasks from the database
}

function getOneTask(request, response) {

  //get a single task from the database
}

function showForm(request, response) {
  response.render('pages/add-view');
}

function addTask(request, response) {
 //add a task
}

function handleError(error, response) {
  response.render('pages/error-view', {error: 'Uh Oh'});
}
