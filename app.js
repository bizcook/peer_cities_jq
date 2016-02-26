$(document).ready(function(){
  for(var i = 0; i < cityArray.length; i++){
    $('.city').append("<div></div>");

    var $el = $('.city').children().last();
    var city = cityArray[i];

    $el.append('<h1>' + city.name + '</h1>');
    $el.append('<p>State: ' + city.state + '</p>');
    $el.append('<p>Population: ' + city.population + '</p>');
    $el.append('<p>Land Area: ' + city.landArea + ' square miles</p>');
  }
});

function City(name, state, population, landArea){
  this.name = name;
  this.state = state;
  this.population = population;
  this.landArea = landArea;
  cityArray.push(this);
}

var cityArray = [];

var minneapolis = new City("Minneapolis", "Minnesota", 400070, 58.4);
var boston = new City("Boston", "Massachusetts", 645966, 89.63);
var montreal = new City("Montreal", "Quebec", 1650000, 141);

console.log(cityArray);
