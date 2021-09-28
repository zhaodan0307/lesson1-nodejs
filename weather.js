
// try weather-js module from https://www.npmjs.com/package/weather-js
let weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'L4M 3X9', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);

    console.log(JSON.stringify(result, null, 2));
});