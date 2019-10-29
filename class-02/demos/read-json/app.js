'use strict';

function Dog(dog) {
  this.name = dog.name;
  this.image_url = dog.image_url;
  this.hobbies = dog.hobbies;
}

Dog.allDogs = [];

Dog.prototype.render = function() {


  //1. Create Element
  let dogClone = $('#dog-template').clone();
  console.log(dogClone);
  let $dogClone = $(dogClone[0].content);
  console.log($dogClone);

  //2. Give it Content
  $dogClone.find('h2').text(this.name);
  $dogClone.find('img').attr('src', this.image_url);
  $dogClone.find('p').text(this.hobbies);
  $dogClone.removeClass('clone');
  $dogClone.attr('class', this.name);

  //3. Append to the DOM
  $dogClone.appendTo('main');

};

Dog.readJson = () => {
  $.get('./data.json')
    .then(data => {
      data.forEach(item=> {
        Dog.allDogs.push(new Dog(item));
        console.log(item);
      });
    })
    .then(Dog.loadDogs);
};

Dog.loadDogs = () => {
  Dog.allDogs.forEach(dog => dog.render());
};

$(() => Dog.readJson());
