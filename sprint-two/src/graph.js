

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edge = {};
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.nodes;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // return this.edge[fromNode] === toNode;
  if (this.edge[fromNode] !== undefined && this.edge[fromNode].indexOf(toNode) !== -1) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.edge[fromNode] === undefined) {
    this.edge[fromNode] = [];
  }
  if (this.edge[toNode] === undefined) {
    this.edge[toNode] = [];
  }
  this.edge[fromNode].push(toNode);
  this.edge[toNode].push(fromNode); 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toRemove = this.edge[fromNode].indexOf(toNode);
  this.edge[fromNode].splice(toRemove, 1);
  var fromRemove = this.edge[toNode].indexOf(fromNode);
  this.edge[toNode].splice(fromRemove, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(this.nodes[node]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 addNode through removeEdge O(1):
 These are all constant time because these object operations are in constant time.

 forEachNode O(n):
 forEachNode is linear because the cb is applied to each node.
 */


