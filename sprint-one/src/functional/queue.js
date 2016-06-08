var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index++] = value;
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
