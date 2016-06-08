var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance.storage = {};
  stackInstance.index = 0;
  _.extend(stackInstance, stackMethods);
  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.index++] = val;
};

stackMethods.pop = function() {
  this.index && this.index--;
  var temp = this.storage[this.index];
  delete this.storage[this.index];
  return temp;
};

stackMethods.size = function() {
  return this.index;
};


