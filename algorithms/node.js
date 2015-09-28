/*
	Data Structures in Node JS mainly use classes and references. 
	Below is the description of the Node class. 
*/

var Node = function(data, next) {
	this.data = data;
	this.next = next;
}

Node.prototype.showNodeData() = function() {
	console.log(this.data);
}

var linkedList = function() {
	this.head = new Node(null, null);
	this.length = 0;
}

linkedList.prototype = {
	getListHead : function() {
		return this.head;
	},

	appendNode : function(data) {
		if(this.head.data == null) {
			this.head = new Node(data, null);
		} else {
			var cur = this.head;
			while(cur.next != null) {
				cur = cur.next;
			}
			var newNode = new Node(data, next);
			cur.next = newNode;
		}
		this.length += 1;
	},

	prependNode : function(data) {
		if(this.head.data == null) {
			this.head = new Node(data, null);
		} else {
			var listHead = getListHead();
			var newNode = new Node(data, this.head);
			this.head = newNode;
		}
		this.length += 1;
	},

	removeNode : function(data) {
			var prevNode = null;
			var cur = this.head;
			while(cur.data != data) {
				prevNode = cur;
				cur = cur.next;
			}
			prevNode.next = cur.next;
			delete cur;
	}, 
	printList : function() {
		var cur = this.head;
		var result = "";
		while(cur != null) {
			if(cur.next == null) {
				result += cur.data;
			} else {
				result += cur.data + ",";
			}
			cur = cur.next;
		}
		console.log(result);
	}
}

var linkedlist = new linkedList();