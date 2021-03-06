var BinarySearchTree = function(value) {
  var treeInstance = {};
  treeInstance.left = null;
  treeInstance.right = null;
  treeInstance.value = value;
  _.extend(treeInstance, binaryTreeMethods);
  return treeInstance;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(val, currentNode) {
  currentNode = currentNode || this;
  if (val < currentNode.value) {
    if (!currentNode.left) {
      currentNode.left = BinarySearchTree(val);
    } else {
      currentNode.insert(val, currentNode.left);
    }
  } else if (val > currentNode.value) {
    if (!currentNode.right) {
      currentNode.right = BinarySearchTree(val);
    } else {
      currentNode.insert(val, currentNode.right);
    }
  }
};

binaryTreeMethods.contains = function(target, currentNode) {
  currentNode = currentNode || this;
  if (currentNode.value === target) {
    return true;
  } else if (target < currentNode.value) {
    if (currentNode.left === null) {
      return false;
    } else {
      return this.contains(target, currentNode.left);
    }
  } else if (target > currentNode.value) {
    if (currentNode.right === null) {
      return false;
    } else {
      return this.contains(target, currentNode.right);
    }
  }
};

binaryTreeMethods.depthFirstLog = function(cb, currentNode) {
  currentNode = currentNode || this;
  cb(currentNode.value);
  if (currentNode.left) {
    currentNode.depthFirstLog(cb, currentNode.left);
  } 
  if (currentNode.right) {
    currentNode.depthFirstLog(cb, currentNode.right);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(log n) || O(n):
 insert is log n because we are cutting the search in half on each iteration.
 insert is linear in the event of an unbalanced tree.

 contains = O(log n) || O(n):
 contains is log n because we are cutting the search in half on each iteration.
 contains is linear in the event of an unbalanced tree.
 
 depthFirstLog = O(log n) || O(n):
 depthFirstLog is log n because we are cutting the search in half on each iteration.
 depthFirstLog is linear in the event of an unbalanced tree.

 */
