var Stack = function() {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.index++] = val;
};
Stack.prototype.pop = function() {
  this.size() && this.index--;
  var temp = this.storage[this.index];
  delete this.storage[this.index];
  return temp;
};

Stack.prototype.size = function() {
  return this.index;
};


