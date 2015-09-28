function makePalindrome() {
    
   var processInputStr = function(input) {
        splitInput =  input.split('');
        return splitInput;
    } 

    var reverseInputStr = function(inputArr) {
        reversedInput = inputArr.split('').reverse();
        return reversedInput;
    }
    
    var makeDict = function(str) {
        var d = {};
        for(var i = 0; i < str.length; i++) {
            d[str[i]] = (d[str[i]] || 0) + 1;
        }
        return d;
    }
    
    var countOddOccurances = function(dictStr,str) {
        console.log(dictStr);
        var oddCharFlag = 0;
        var oddChar;
        for(var key in dictStr) {
            if(dictStr[key]%2 == 1) {
                if(oddCharFlag == 1) {
                    oddChar = key;
                    return str.indexOf(key);
                } else  {
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
        var revArr = reverseInputStr(incomingStr);
        if(strArr.join() === revArr.join()) {
            console.log("-1");
        } else { 
            var strDict = makeDict(strArr);
            var oddCharOccurance = countOddOccurances(strDict, strArr);
            console.log(oddCharOccurance);
        }
        
    }
} 

var palStr = new makePalindrome();
palStr.isPalindrome('hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh');
