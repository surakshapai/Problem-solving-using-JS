var isEle = function(arr,x) {
	var n = arr.length;
	var i = n-1;
	var j = 0;
	var flag = 0;

	while((i >= 0) && (j < n)) {
		if(arr[i][j] == x) {
			console.log("Found element" + x + "at" + i);
			flag = 1;
			break;
		} else if(arr[i][j] < x) {
			j = j + 1; 
		} else {
			i = i - 1;
		}
	}
	if(!flag) { 
		console.log("not found");
	}

}


twoDArray = [[10, 20, 30, 40],[15, 25, 35, 45],[27, 29, 37, 48],[32, 33, 39, 50]];
isEle(twoDArray, 39)