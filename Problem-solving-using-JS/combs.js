var sum = function (arrSent) {
    var total = 0;
    var i = arrSent.length; 

    while (i--) {
        total += arrSent[i];
    }

    return total;
}

flag = 0;
str = function(active, rest, n) {
	if(flag == 1) {
		return;
	}
    if (n == 0) {
        sumCalc = sum(active);
        if(sumCalc == 0) {
        	console.log("it consists of those numbrs");
        	flag = 1;
        }
    } else {
        for(var i = 0; i < rest.length; i++) {
        	active.push(rest[i]);
        	str(active, rest.slice(i+1,rest.length), n-1);
        }
    }
}

var arr = new Array();
var oArr = [2, 0 , -2, -3, 4];
str(arr, oArr, 3);