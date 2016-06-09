var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, currentLocation) {
  currentLocation = currentLocation || this;
  if (currentLocation.value === target) {
    return true;
  } else {
    for (var i = 0; i < currentLocation.children.length; i++) {
      if (this.contains(target, currentLocation.children[i])) {
        return true;
      }
    }
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
