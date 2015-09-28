var palindrome = function(str) {
	// var toTrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	str = str.replace(/[^\w\s]/g, "").replace(/ /g, "").toLowerCase(); //anything that is not a digit or a letter 
	size = str.length;

	if(size == 1) {
		console.log(str);
	}

	firstPart = str.substring(0, size/2);
	if(size%2 == 0) {
		secondPart = str.substring(size/2,size);
	} else {
		secondPart = str.substring((size/2)+1, size);
	}

	secondPart = secondPart.split('').reverse().join('');

	if(firstPart === secondPart) {
		console.log("palindorme");
	} else {
		console.log("not");
	}
}

str = "abc";
palindrome(str);





