'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

// Application Setup
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get('/', (request,response) => {
  response.send('Home Page!');
});

app.get('/bad', (request,response) => {
  throw new Error('poo');
});

// The callback can be a separate function. Really makes things readable
app.get('/about', aboutUsHandler);

function aboutUsHandler(request,response) {
  response.status(200).send('About Us Page');
}

// API Routes

app.get('/location', handleLocation);
app.get('/weather', handleWeather);

//Route Handlers
function handleLocation(request,response) {

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${request.query.data}&key=${process.env.GEOCODE_API_KEY}`;

  superagent.get(url)
    .then( data=> {
      const geoData = data.body;
      const location = new Location(request.query.data, geoData);
      response.send(location);
      response.send(data);
    })
    .catch( error => {
      console.error(error);
      response.status(500).send('Status: 500. Sorry, there is something not quite right');
    });


}

function handleWeather(request, response) {

  const url = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${request.query.data.latitude},${request.query.data.longitude}`;
  superagent.get(url)
    .then( data => {
      const weatherSummaries = data.body.daily.data.map(day => {
        return new Weather(day);
      });
      response.status(200).json(weatherSummaries);
    })
    .catch( ()=> {
      errorHandler('So sorry, something went really wrong', request, response);
    });

}

function Weather(day) {
  this.forecast = day.summary;
  this.time = new Date(day.time * 1000).toString().slice(0,15);
}


app.use('*', notFoundHandler);
app.use(errorHandler);

// HELPER FUNCTIONS

function Location(city, geoData) {
  this.search_query = city;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude = geoData.results[0].geometry.location.lng;
}



function  notFoundHandler(request,response) {
  response.status(404).send('huh?');
}

function errorHandler(error,request,response) {
  response.status(500).send(error);
}



// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`) );
