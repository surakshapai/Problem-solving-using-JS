
function processData(input) {
    // s = input.split('\n');
    // s.splice(0,1);
    s = input;
    console.log(s.length);
    for(var k = 0; k < s.length; k++) {
        l = s[k].length;
        if (l%2 == 0) {
            first = s[k].slice(0,l/2).split('').sort().join('');
            second = s[k].slice(l/2,l).split('').sort().join('');
            if(first === second) {
                console.log("0")
            }
            else {
                var count = 0;
                for(var i = 0; i < first.length; i++){
                        if(second.indexOf(first[i]) < 0) {
                            count = count + 1;
                        }
                }
                if(count > 0) {
                    console.log(count);
                }
            }
        }       
        else {
            console.log("-1");
        }
    }
} 

processData("hhpddlnnsjfoyxpciioigvjqzfbpllssuj");
