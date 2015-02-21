var types = require('./');

Object.keys(types).forEach(function(key) {
	console.log(key + ': ' + types[key]);
});