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
    var red = 0;
    var yellow = 0;
    var white = 0;
    var green = 0;
    cars.forEach(function (e) {
        if (e.color  === 'red') {
            red++;
        }
        if (e.color  === 'yellow') {
            yellow++;
        }
        if (e.color  === 'white') {
            white++;
        }
        if (e.color  === 'green') {
            green++;
        }
    });
    var output = {'red' : red, 'yellow' : yellow, 'white' : white, 'green' : green}
    console.log(output);
}

count_cars_by_color(cars);
