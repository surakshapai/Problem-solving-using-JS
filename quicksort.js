var swap = function(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

var partition = function(arr, left, right) {
	var pivot = Math.floor((right+left)/2);
	var i = left;
	var j = right;

	while(i <= j) {
		while(arr[i] < arr[pivot]) {
			i++;
		} 
		while(arr[j] > arr[pivot]) {
			j--;
		}

		if(i <= j) {
			swap(arr, i, j);
			i++;
			j--;
		}
	}
	
	return i;
}

var quickSort = function(items, left, right) {
	var index;

	if(items.length > 1) {
		index = partition(items,left,right);

		if(left < index-1) {
			quickSort(items, left, index-1);
		}

		if(index < right) {
			quickSort(items, index, right);
		}
	}

	return items;
}

items = [34, 203, 3, 746, 200, 984, 198, 764, 9];
console.log(quickSort(items, 0, items.length-1));