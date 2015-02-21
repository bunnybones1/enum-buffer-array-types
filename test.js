var types = require('./');

Object.keys(types).forEach(function(key) {
	var index = types[key];
	console.log(key + ': ' + index + ' [' + types.getConstructor(index) + ']');
});