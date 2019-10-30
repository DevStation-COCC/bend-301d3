'use strict';

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
function Neighborhood (rawDataObject) {

  for (let key in rawDataObject){
    this[key] = rawDataObject[key];
  }
}

Neighborhood.prototype.toHtml = function() {

  // 1. Get the template from the HTML document
  let template = $('#neighborhood-template').html();
  // 2. Use Handlebars to "compile" the HTML
  let templateRender = Handlebars.compile(template);
  // 3. Do not forget to return the HTML from this method
  return templateRender(this);
};
//take dataset iterms
neighborhoodDataSet.forEach(neighborhoodObject => {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(ourNewNeighborhoodObject => {
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});
