var generateRandomNumber = function(min, max) { 
	return Math.floor(Math.random() * (max-min) + min);
}
var kSmall = function(arr, k) {
	var r = generateRandomNumber(0,arr.length);
	// console.log("random number");
	// console.log(r);
	var pivot = arr[r];
	var aSmall = [];
	var aLarge = [];

	for (var i = 0; i < arr.length; i++) {
		if(arr[i] < pivot) {
			aSmall.push(arr[i]);
		} else if(arr[i] > pivot) {
			aLarge.push(arr[i]);
		} else {
			//Do nothing
		}
	}

	if(k <= aSmall.length) {
		return kSmall(aSmall, k);
	} else if (k > (arr.length - aLarge.length)) {
		return kSmall(aLarge, k - (arr.length - aLarge.length));
	} else {
		return pivot;
	}
}

testArray = [3, 1, 6, 2, 10, 15];
console.log(kSmall(testArray, 5));