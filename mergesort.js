// Efficieny O(n log n)
var combineMerge = function(left, right) {
	il = 0, ir = 0;
	var result = [];

	while ( il < left.length && ir < right.length) { 
		if(left[il] < right[ir]) { 
			result.push(left[il++]);
		} else {
			result.push(right[ir++]);
		}
	}
	return result.concat(left.slice(il)).concat(right.slice(ir));

}

var mergeSort = function(arr) {
	if(arr.length < 2) {
		return arr;
	}

	var middle = Math.floor(arr.length/2);
	var left = arr.slice(0, middle);
	var right = arr.slice(middle);
	return combineMerge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([34, 203, 3, 746, 200, 984, 198, 764, 9]));