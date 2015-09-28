var longestUniqueSubStr = function(s) {
	var n = s.length;
	var i = 0;
	var j = 0;
	var startIndex = 0;
	var endIndex = 0;
	var visited = [];

	while (j < n) {
		console.log(visited);
		if(!(visited.indexOf(s[j]) > -1)) {
			visited.push(s[j]);
			j = j+1;
		} else {
			indexOfRepeatChar = visited.indexOf(s[i]);
			visited.splice(indexOfRepeatChar,1);
			i = i+1;
		}
		if((endIndex-startIndex) < (j-i)) {
			endIndex = j;
			startIndex = i;
		}
	}

	return s.substring(startIndex, endIndex);
}

var result = longestUniqueSubStr("stackoverflow");
console.log(result);