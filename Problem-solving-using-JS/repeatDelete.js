var removeDuplicates = function(arr) {
	for (var i = 0; i <= (arr.length-1); i++) {

		while(arr[arr[i]] != arr[i]) {
			temp = arr[arr[i]];
			arr[arr[i]] = arr[i];
			arr[i] = temp;
		}
	}	


	for(var i = 0; i <= (arr.length-1); i++) {
		if (arr[i] != i) {
			console.log(arr[i]); 
		}
	}
	// console.log("indexof");
	console.log(arr);
	// index = (arr.lastIndexOf(1));
	// console.log(arr.splice(index,1));
	// N = A.length-1
	// for (i = 0; i < N; ++i) {
 //    	if (A[i] != i && A[A[i]] == A[i]) {
 //        	console.log(A[i]);
 //        	A[A[i]] = i;
 //    	}
	// }
}


removeDuplicates([1, 2, 3, 1, 3, 0, 6]);