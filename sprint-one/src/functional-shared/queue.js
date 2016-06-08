var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {};
  queueInstance.storage = {};
  queueInstance.head = 0;
  queueInstance.tail = 0;

  _.extend(queueInstance, queueMethods);

  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.tail++] = val;

};

queueMethods.dequeue = function() {
  var temp = this.storage[this.head];
  delete this.storage[this.head];
  this.size() && this.head++;
  return temp;
};

queueMethods.size = function() {
  return this.tail - this.head;
};

