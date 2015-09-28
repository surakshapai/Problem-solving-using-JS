// Buulding a linked list 

//Constructor 
function LinkedList(){
	this.length = 0;
	this.head = null;
}

LinkedList.prototype = {
	add : function(data) {
		var node = {
			data : data,
			next : null
		},

		current;

		if(!this.head) {
			this.head = node;
		} else {
			current = this.head;

			while(current.next) {
				current = current.next;
			}

			current.next = node;
		}
		this.length++;
	},

	reverse : function(head) { 
		console.log("head");
		console.log(head);
		if((head.next == null) || (head == null)) {
			return head;
		}

		rev = this.reverse(head.next);

		head.next.next = head;
		head.next = null;
		return rev;
	},

	insertValue : function(list, data, pos) {
		var newNode = {
			data : data,
			next : null
		},

		current, previous = null, pos = 0; 

		current = list.head;
		while(current.next != null) {
			current = 
		}


	}
};


var list = new LinkedList();
for(var i = 0; i < 5; i++) {
	list.add(i*10);
}

reveresedList = list.reverse(list.head);
console.log(reveresedList);