var matchInput = function(input) {
	// Match returns an array of information if the string matches, or null on a mismatch
	input = input.match(/^(.*)$/igm);
	// input = ["ABCDS1234Y"]
	console.log(input);
	var n = parseInt(input[0]),
		strs = input.slice(1, n + 1);
	for (i = 0, j = strs.length; i < j; i += 1) {
		if (strs[i].match(/[A-Z]{5}[0-9]{4}[A-Z]/g)) {
			console.log('YES\n');
		} else {
			console.log('NO\n');
		}
	}
}

matchInput('ABCDS1234Y');