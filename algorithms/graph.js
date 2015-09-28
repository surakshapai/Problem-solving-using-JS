/* Graphs contain nodes that are connected by edges. Trees are graphs with drected edges. In graphs, the nodes included would be in each other's list, unless, its a directed graph. */

var doesGraphContainNode = function(node) {
	var numberOfNodes = this.nodeList.length;
	while(numberOfNodes--) {
		if(this.nodeList[numberOfNodes] === node) {
			return true;
		} else {
			return false;
		}
	}
}

// Class declaration for Graph 
var Graph = function() {
	this.nodeList = [];
}

// Graph methods 
Graph.prototype = {
	addNodes : function(startNode, endNode) {
		var startNode = this.doesGraphContainNode(startNode);
		var endNode = this.doesGraphContainNode(endNode);

		// Scenario when the startnode already exists in the graph. Traverse to startNode and append endNode
		if(startNode) {
			var numberOfNodes = this.nodeList.length;
			while(numberOfNodes--) {
				if(this.nodeList[numberOfNodes] === startNode) {
					// Add endNode to this startNode
					var newNode = new Node(endNode);
					appendNode(newNode);
				}
			}
		}

		// Scenario when the endnode already exists in the graph 
		if(endNode) {

		}

		// Scenario when both the nodes don't exist 
		if(!(startNode) || !(endNode)) {

		}
	}

}

// Class declaration for nodes in the graph. Contains edgelist between nodes. and node data
var Node = function(data) {
	this.edgeList = [];
	this.data = data;
}

Node.prototype = {
	appendNode : function(endNode) {
		
	}
}

var g = new Graph();
g.addNodes("1", "2");