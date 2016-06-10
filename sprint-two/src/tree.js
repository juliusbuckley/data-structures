var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;
  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
};

treeMethods.removeFromParent = function(child, currentTree) {
  currentTree = currentTree || this;
  var childLocation = _.reduce(currentTree.children, function(index, node, i) {
    if (child === node.value) {
      return i;
    }
    return index;
  }, -1);
  if (childLocation !== -1 ) {
    var removedChild = currentTree.children.splice(childLocation, 1)[0]; 
    removedChild.parent = null;
    var rt = this.findRoot(currentTree.children[0]);
    return [removedChild, rt];
  }
  for (var i = 0; i < currentTree.children.length; i++) {
    this.removeFromParent(child, currentTree.children[i]);
  }
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

treeMethods.findRoot = function(child) {
  return {};
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(1):
 The addChild assumes you're already on the node you want to push to.

 contains O(n):
 Contains is linear because in the worst case we must iterate through all children.
 */
