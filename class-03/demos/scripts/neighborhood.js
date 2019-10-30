'use strict';

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
function Neighborhood (rawDataObject) {
  this.name = rawDataObject.name;
  this.city = rawDataObject.city;
  this.population = rawDataObject.population;
  this.founded = rawDataObject.founded;
  this.body = rawDataObject.body;
}

Neighborhood.prototype.toHtml = function() {

  // 1. Get the template from the HTML document

  // 2. Use Handlebars to "compile" the HTML

  // 3. Do not forget to return the HTML from this method

};

neighborhoodDataSet.forEach(neighborhoodObject => {
});

neighborhoods.forEach(ourNewNeighborhoodObject => {
});
