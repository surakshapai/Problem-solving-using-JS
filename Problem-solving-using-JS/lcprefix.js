var lcp = function(strArray) {
	var lcp = "";
	if(strArray.length == 0) {
		return "";
	}
	for(var prefixLength = 0; prefixLength < strArray[0].length; prefixLength++) {
		var c = strArray[0].charAt(prefixLength);
		for(var i = 1; i < strArray.length; i++) {
			if((prefixLength >= strArray[i].length) || (strArray[i].charAt(prefixLength) != c)) {
				return (strArray[i].substring(0,prefixLength));
			}
		}
	}
	return strArray[0];
}


var sa = ['flower', 'flow', 'floweet']
console.log(lcp(sa));