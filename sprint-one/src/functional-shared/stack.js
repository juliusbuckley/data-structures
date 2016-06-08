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
  
};

stackMethods.pop = function() {

};

stackMethods.size = function() {

};


