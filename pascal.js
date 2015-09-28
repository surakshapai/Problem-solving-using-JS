var output = [];
var pascal = function(triangle, rowIndex) {
	var prev = triangle[rowIndex - 1];
	var left, right, i, length;
	var row = [];

	if(!prev) {return [1];}

	length = prev.length;
	for(i = 0; i<=length; i++) {
		left = prev[i-1];
		right = prev[i];

		if(!left) {row.push(right); continue;}
		if(!right) {row.push(left); continue;}

		row.push(left+right);

	}
	return row;
}

for(var i = 0; i < 6; i++) {
	output.push(pascal(output, i));
}

console.log(output);