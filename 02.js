// Create a function that counts the cars by colors
// With an output like: {red: 3, yellow: 2, white: 1, green: 1}
'use strict';


const cars = [{
    color: 'red',
    type: 'Volvo'
  }, {
    color: 'yellow',
    type: 'VW'
  }, {
    color: 'red',
    type: 'Ferrari'
  }, {
    color: 'white',
    type: 'Tesla'
  }, {
    color: 'yellow',
    type: 'Toyota'
  }, {
    color: 'red',
    type: 'Lada'
  }, {
    color: 'green',
    type: 'Trabant'
}];

function count_cars_by_color(cars) {
  var colors = {};
  cars.forEach(function(e) {
    colors[e.color] = colors[e.color] + 1 || 1;
  });
  return colors;
}

console.log(count_cars_by_color(cars));
