function makePalindrome() {
	var processString = function(incomingStr) {
		arr = incomingStr.split("");

		return arr;
	}

	var checkPal = function(incomingStr) {
		var str = incomingStr.join('');
		var backupStr = incomingStr;
		var revStr = backupStr.reverse().join('');
		incomingStr.reverse();

		if (str === revStr) {
			return true;
		} else {
			return false;
		}
	}
	this.findIndex = function(input) {


		var strArr = processString(input);
		var isPal = checkPal(strArr);
		if (isPal === true) {
			console.log("-1");
		} else {
			for (var i = 0; i < strArr.length; i++) {
				var j = strArr.length - 1 - i;
				if (strArr[i] !== strArr[j]) {
					var before = strArr.slice(0, i + 1).join('');
					var after = strArr.slice(i + 1, strArr.length - 1).join('');
					var newStr = before + after;
					newStr = newStr.split('');
					if (checkPal(newStr) === true) {
						console.log(j);
						break;
					} else {
						console.log(i);
						break;
					}
				}
			}
		}

	}
}

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    var inputArr = _input.split("\n");
//    for(var i = 1; i < inputArr.length; i++) {
var palWord = new makePalindrome();
palWord.findIndex('hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh222');
// }
// });