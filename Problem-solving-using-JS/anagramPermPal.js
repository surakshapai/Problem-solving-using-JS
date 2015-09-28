var isAnagramPermPalindrome = function(incomingStr) {
    var str = incomingStr;


    var countOddOccurances = function(obj) {
        var odd = 0;
        for(var key in obj) {
            if(!(obj[key] % 2 == 0)) {
                odd++;
            }
        }
        return odd;
    }

    this.isPalindrome = function() {
        var resultingArrStr = str.split('').sort();
        var result = {};
        for (var i = 0; i < resultingArrStr.length; i++) {
            result[resultingArrStr[i]] = (result[resultingArrStr[i]] || 0) + 1;
        }
        if (countOddOccurances(result) > 1) {
            console.log('Not a palindrome');
        } else {
            console.log('Is a palindrome');
        }
    }
}

var inputStr = new isAnagramPermPalindrome('cdcdcdcdeeeef');
inputStr.isPalindrome();