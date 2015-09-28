result = [];
var findAllCombs = function(str) {
	str = str.toLowerCase();
	if(str.length == 1) {
		result.push(str);
		result.push(str.toUpperCase());
	}

	
}

str = "abc";
findAllCombs(str);