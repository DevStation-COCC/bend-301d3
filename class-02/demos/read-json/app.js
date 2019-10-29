'use strict';

function Dog(dog) {
  this.name = dog.name;
  this.image_url = dog.image_url;
  this.hobbies = dog.hobbies;
}

Dog.allDogs = [];

Dog.prototype.render = function() {

};

Dog.readJson = () => {

};

Dog.loadDogs = () => {
};

$(() => Dog.readJson());
