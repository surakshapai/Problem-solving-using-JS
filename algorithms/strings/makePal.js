 var process = function(currentstr) {

     // var numberTestCases = input[0];
     // var strs = input.slice(1, numberTestCases + 1);

     // for(var i = 0; i < strs.length; i++) {
     // var currentstr = strs[i];
     // console.log("currentstr  " + currentstr);
     var count = 0;
     for (var leftPtr = 0, rightPtr = currentstr.length - 1; leftPtr <= (currentstr.length / 2), rightPtr >= currentstr.length / 2; leftPtr++, rightPtr--) {
       console.log(leftPtr);
       console.log(rightPtr);
       if (currentstr.charCodeAt(leftPtr) !== currentstr.charCodeAt(rightPtr)) {
         rightmostCharCode = currentstr.charCodeAt(rightPtr);
         console.log("rightmostCharCodeBeforeComparison  " + rightmostCharCode);
         console.log("leftMostBeforeComparison  " + currentstr.charCodeAt(leftPtr));
         while (currentstr.charCodeAt(leftPtr) !== rightmostCharCode) {
           console.log("lhs  " + currentstr.charCodeAt(leftPtr));
           console.log("rhs  " + rightmostCharCode);
           count++;
           rightmostCharCode = rightmostCharCode - 1;
         }
       }

     }

     // }
     
   }
   // }

process('abcd');