var findPairs = function(arr, k) {
	hash = {};

	for(var i = 0; i < arr.length; i++) { 
		hash['val_'+arr[i]] = i;
	}
	console.log(hash);

	for(var i = 0; i < arr.length; i++) {
		value = hash['val_'+arr[i]];
		console.log(value);
		if(value != i) {
			console.log("not");
			console.log("pair" + value + i)
		}
	}
}

findPairs([1,2,3,4,5,6,7,8,9,0], 10)