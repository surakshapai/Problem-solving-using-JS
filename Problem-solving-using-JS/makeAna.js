function processData(input) {
	s = input.split('\n');
	s.splice(0, 1);
	s = input;
	for (var k = 0; k < s.length; k++) {
		l = s.length;
		if (l % 2 == 0) {
			first = s.slice(0, l / 2).split('').sort().join('');
			second = s.slice(l / 2, l).split('').sort().join('');
			if (first === second) {
				console.log("0")
			} else {
				var count = 0;
				var visited = [];
				for (var i = 0; i < first.length; i++) {
					searchStr = first[i];
					if (visited.indexOf(searchStr) > -1) {
						continue;
					}
					visited.push(searchStr);
					if ((second.split(searchStr).length - 1) != (first.split(searchStr).length - 1)) {
						diff = ((first.split(searchStr).length - 1) - (second.split(searchStr).length - 1));
						if (diff > 0) {
							count = count + diff;
						}

					} else if ((second.split(searchStr).length - 1) <= 0) {
						count = count + 1;
					}
				}
				if (count > 0) {
					console.log(count);
				}
			}
		} else {
			console.log("-1");
		}
	}
}

processData("lbafwuoawkxydlfcbjjtxpzpchzrvbtievqbpedlqbktorypcjkzzkodrpvosqzxmpad");