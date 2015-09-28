hashmap = {};
var sorted = [];
var index;

list = ['aa','bc','ad','da','cb', 'abc', 'cba', 'bac'];
list = list.sort();
console.log(list);
list.forEach(function(w) {
	var o = w;
	w = w.split("").sort().join("");
	if(!(w in hashmap)) {
		var inner = [];
		hashmap[w] = [];
		inner.push(w);
		sorted.push(inner);
		index = sorted.indexOf(inner);
	} else {
		console.log(o);
		console.log(sorted[index]);
		hashmap[w].push(o);
	}
});

console.log(hashmap);
// for(var prop in hashmap) {
// 	console.log(prop);
// 	console.log(hashmap[prop]);
// }

// function print(obj, key) {
// 	console.log(obj);
// 	console.log(key);
// }
// console.log(Object.keys(hashmap));



