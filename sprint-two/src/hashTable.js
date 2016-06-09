var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  } 
  this._storage.get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index).filter(function(tuple){
    return tuple[0] === k;
  })[0][1]; 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valueToRemove = this._storage.get(index);
  this._storage.each(function (item, i, list) {
    if (valueToRemove === item) {
      delete list[i];
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


