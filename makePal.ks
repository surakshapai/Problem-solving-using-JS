function makePalindrome() {
    
    var processInputStr = function(input) {
        return input.split('');
    }
    
    var makeDict = function(str) {
        var d = {};
        for(var i = 0; i < str.length; i++) {
            d[str[i]] = (d[str[i]] || 0) + 1;
        }
        return d;
    }
    
    var countOddOccurances = function(dictStr,str) {
        console.log("called for ")
        var oddCharFlag = 0;
        var oddChar;
        for(var key in dictStr) {
            if(dictStr[key]%2 == 1) {
                if(oddCharFlag == 1) {
                    oddChar = key;
                    return str.indexOf(key);
                } else {
                    oddChar = key;
                    oddCharFlag = 1;
                }
            } else if((dictStr[key]%2 == 0) && (oddCharFlag == 1)) {
                return str.indexOf(oddChar);
            } else {
                return -1;
            }
        }
       
    }
    
    this.isPalindrome = function(incomingStr) {
        var strArr = processInputStr(incomingStr);
        if(strArr.join() === strArr.reverse().join()) {
            console.log("Found a palindrome before finding dict");
            console.log("-1");
        } else {
            console.log("Coming here for");
            console.log(strArr);
            var strDict = makeDict(strArr);
            var oddCharOccurance = countOddOccurances(strDict, strArr);
            console.log(oddCharOccurance);
        }
        
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
        _input += input;
});

process.stdin.on("end", function () {
   var testCases = _input.split("\n")[0];
   for(var i = 1; i <= testCases; i++) {
       var palStr = new makePalindrome();
       palStr.isPalindrome(_input.split("\n")[i]);
   }
});
