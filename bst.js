function BinarySearchTree () {
	this.root = null;
}

BinarySearchTree.prototype = {
	add : function(valToInsert){
		var node = {
			data : valToInsert,
			left : null,
			right : null
		},
		current;

		if(this.root === null) {
			this.root = node;
		} else {
			current = this.root;
			while(true) {
				if(valToInsert < current.data) {
					if(current.left === null) {
						current.left = node;
						break;
					} else {
						current = current.left;
					}
				} else if(valToInsert > current.data) {
					if(current.right === null) {
						current.right = node;
						break;
					} else {
						current = current.right;
					}
				} else { 
					break;
				}
			}
		}
	},

	search: function(valToSearch) {
		current = this.root;
		var found = false;
		while(!found == current) {
			if(valToSearch < current) {
				current = current.left;
			} else if(valToSearch > current) {
				current = current.right;
			} else {
				found = true;
			}
		}
		return found;
	},

	inOrderTraverse : function (node) {
			if(node === null) {
				return node;
			}
			this.inOrderTraverse(node.left);
			console.log(node.data);
			this.inOrderTraverse(node.right);
	},

	preOrderTraverse : function(node) { 
		if(node === null) {
			return node;
		}
		console.log(node.data);
		this.inOrderTraverse(node.left);
		this.inOrderTraverse(node.right);
	}, 

	postOrderTraverse : function(node) { 
		if(node === null) {
			return node;
		}
		this.inOrderTraverse(node.left);
		this.inOrderTraverse(node.right);
		console.log(node.data);
	},

	traverse : function(process) {
		function inOrder(node) {
			if(node){
				if(node.left !== null) {
					inOrder(node.left);
				}

				process.call(this, node);

				if(node.right !== null) {
					inOrder(node.right);
				}
			}
		}
		inOrder(this.root);
	},


	remove: function() {

	},
	size : function() {
		var length = 0;
		this.traverse(function(node){
			length++;
		});
		return length;
	},

	toArray : function(){
		var resultArray = [];
		this.traverse(function(node){
			resultArray.push(node.data);
		});
	console.log(resultArray);
	}

}


var b = new BinarySearchTree();
itemArray = [8,3,10,1,6,14, 4, 7, 13];

for (var i = 0; i < itemArray.length; i++) {
	b.add(itemArray[i]);
}

b.toArray();