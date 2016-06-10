var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  
  !bucket.length && this._storage.set(index, bucket);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }
  
  bucket.push([k, v]); 
  
}; 

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); 
  var bucket = this._storage.get(index);
  if (!bucket || bucket.length === 0) { 
    return undefined;
  }
  return bucket.filter(function(tuple) {
    return tuple[0] === k;
  })[0][1]; 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.each(function (item, i, list) {
  //   if (valueToRemove === item) {
  //     delete list[i];
  //   }
  // });
  this._storage.set(index, []);
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(n) || O(1):
 insert is linear in the event of collision, because we need to iterate through the tuples to know if the key matches a key already in there.
 insert is constant in the event of no collision, because there is no need to iterate through tuples.

 retrieve = O(n) || O(1):
 retrieve is linear in the event of collisions the tuples need to be iterated.
 retrieve is constant time in the event of no collisions because we don't need to iterate tuples.
 
 remove = O(1):
 remove is in constant time because the set method is a constant time operation.
 */


