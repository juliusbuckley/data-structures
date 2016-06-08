var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index++] = value;
  };

  someInstance.pop = function() {
    index && index--;
    var temp = storage[index];
    delete storage[index];
    return temp;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
