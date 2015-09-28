var createPerm = function(s) {
	sp = s.split("");
	var results = [];
	var len = Math.pow(sp.length,2);

	for(var i = 0; i< len; i++) {
		for(var k = 0, j = i; k < sp.length; k++, j = j/2) { 
			sp[k] = (j & 1) ? sp[k].toUpperCase() : sp[k].toLowerCase();
		}
		var combo = sp.join("");
		results.push(combo);
	}
	console.log(results);
}
createPerm("abc");
