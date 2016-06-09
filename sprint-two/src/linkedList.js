var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = list.tail = Node(value);
    } else {
      list.tail.next = Node(value);
      list.tail = Node(value);
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target, currentNode) {
    var currentNode = currentNode || list.head;
    if (currentNode.value === target) {
      return true;
    } else if (!currentNode.next) {
      return false;
    }
    return list.contains(target, currentNode.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
