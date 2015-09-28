var table = {
	entries: [],
	addEntry: function(key,value) {
		this.entries.push({key:key, value:value});
	},
	forEach: function(f, thisArg) {
		var entries = this.entries;
		for(var i = 0; n = entries.length; i < n; i++) {
			var entry = entries[i];
			f.call(thisArg, entry.key, entry.value,i);
		}
	}
};


//call matters when f is equated to the function to be called back
//If f is addEntry, such as - 
// table.forEach(table.addEntry, table2); 
//We be sending the second table object, but for copying from one table to another





