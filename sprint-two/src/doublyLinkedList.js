var DoublyLinkedList = function() {
  this.storage = {};
  this.head = null;
  this.tail = null;
};

var DoubleNode = function(val) {
  this.value = val;
  this.next = null;
  this.prev = null;
};

DoublyLinkedList.prototype.addToTail = function (value) {
  if (this.head === null) {
    this.head = this.tail = new DoubleNode(value);
  } else {
    var temp = this.tail;
    this.tail.next = new DoubleNode(value);
    this.tail = new DoubleNode(value);
    this.tail.prev = temp;
  }
};

DoublyLinkedList.prototype.removeHead = function () {
  var temp = this.head;
  if (this.head.next) {
    this.head = this.head.next;
    this.head.prev = null;    
  }
  return this.head.value;
};

DoublyLinkedList.prototype.contains = function (target, currentNode) {
  currentNode = currentNode || this.head;
  if (currentNode.value === target) {
    return true;
  }

  if (currentNode.next) {
    if (this.contains(target, currentNode.next)) {
      return true;
    } 
  }

  return false;
  

}; 

DoublyLinkedList.prototype.addToHead = function (value) {
  if (this.head === null) {
    this.head = this.tail = new DoubleNode(value);
  } else {
    var temp = this.head;
    this.head.prev = new DoubleNode(value);
    this.head = new DoubleNode(value);
    this.head.next = temp;
  }
};

DoublyLinkedList.prototype.removeTail = function (target) {
  var temp = this.tail;
  if (this.tail.prev) {
    this.tail = this.tail.prev;
    this.tail.next = null;    
  }
  return this.tail.value;

};
