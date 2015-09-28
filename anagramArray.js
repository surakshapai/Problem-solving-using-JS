var isAnagram = function(word1, word2) {
	if((word1.split("").sort().join("")) == (word2.split("").sort().join(""))) {
		return true;
	}
}

var checkAnagram = function(sourceArray) {
	var sortedArray = [];
	var visited = [];
	sourceArray = sourceArray.sort();

	for(var w  = 0; w < sourceArray.length; w++) {
		var firstWord = sourceArray[w];
		if(visited.indexOf(firstWord) > -1) {
			continue;
		}
		var wordArray = [];
		wordArray.push(firstWord);
		for(var s = 0; s < sourceArray.length; s++) {
			var secondWord = sourceArray[s];
			if(secondWord == firstWord) {
				continue;
			}
			if(visited.indexOf(secondWord) > -1) {
				continue;
			}
			var isA = isAnagram(secondWord, firstWord);
			if(isA) {
				wordArray.push(secondWord);
				visited.push(secondWord);
			}
		}
		visited.push(firstWord);
		sortedArray.push(wordArray);
	}
	console.log(sortedArray);
}



list = ['aa','bc','ad','da','cb', 'abc', 'cba', 'bac'];
checkAnagram(list)


