var flag = 0;
var originalWord;
var finalArray = [];

// var pal = function(str){
//     n = str.length;
//     first = str.slice(0,n/2);
//     if(n%2 == 0) {
//         second = str.slice(n/2,n);
//     } else {
//         second = str.slice((n/2)+1,n);
//     }
//     console.log(first);
//     console.log(second);
//     if(first.join('') === second.join('')) {
//         flag = 1;
//     }
    
// }

var getPermutations = function(word, arr) {
    
    if(flag == 1) {
        return;
    }
    if(typeof word === 'string') {word = word.split('');}
    if(word.length === 0) {
    	console.log(arr.join(''));
    	// permutedWord = arr.join('');
        // if(permutedWord != originalWord)  {
        	finalArray.push(arr.join(''));
        // }
    }
    for (var i = 0; i < word.length; i++) {
        var x = word.splice(i,1);
        arr.push(x);
        getPermutations(word,arr);
        arr.pop();
        word.splice(i,0,x);
    }
}

console.log(finalArray);
// function processData(input) {
//     originalWord = input.trim();
//     getPermutations(input.trim(), []);
    // for (var i = 0; i < finalArray.length; i++) {
    // 	pal(finalArray[i]);
    // }
    // if(flag) {
    //     console.log("YES");
    // }
    // else {
    //     console.log("NO");
    // }
// } 

getPermutations("cdefghmnopq",[]);
