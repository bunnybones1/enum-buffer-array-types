var types = require('./');

Object.keys(types).forEach(function(key) {
	var index = types[key];
	console.log(key + ': ' + index + ' [' + types.getConstructor(index) + ']');
});

var arr = new Uint8Array(100);

console.log('test type is', types.discoverType(arr));