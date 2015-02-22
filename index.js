var constructors = [
	Array,
	Int8Array,
	Uint8Array, 
	Uint8ClampedArray,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array
]

module.exports = {
	Array : 0,
	Int8Array : 1,
	Uint8Array : 2, 
	Uint8ClampedArray : 3,
	Int16Array : 4,
	Uint16Array : 5,
	Int32Array : 6,
	Uint32Array : 7,
	Float32Array : 8,
	Float64Array : 9,
	getConstructor: function(index) {
		return constructors[index];
	},
	discoverType: function(arr) {
		for (var i = constructors.length - 1; i >= 0; i--) {
			if(arr instanceof constructors[i]) return i;
		};
	}
}