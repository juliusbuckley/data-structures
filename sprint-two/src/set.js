var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return item in this._storage;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 add = O(1):
 Add is constant because assigning key/value pairs is a constant operation.
 
 contains = O(1):
 Contains is constant because we are just looking up a key in our storage object.

 remove = 0(1):
 Remove is constant because deleting a key/value pair from an object is a constant time operation.
 */
