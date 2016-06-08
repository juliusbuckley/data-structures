var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.storage = {};
  queueInstance.head = 0;
  queueInstance.tail = 0;
  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.tail++] = val;
};
queueMethods.dequeue = function() {

};
queueMethods.size = function() {

};

