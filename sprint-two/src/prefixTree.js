var PrefixTree = function(value) {

};

var AlphabetNode = function(letter) {
  var alphaInstance = {};
  var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  alpha.forEach(function(char) {
    alphaInstance[char] = new LetterNode(blah);
  });
  return alphaInstance;
};

AlphabetNode.prototype.setNext = function(letter) {
  this[letter].next = new AlphabetNode(); 
};

AlphabetNode.prototype.setEnd = function(letter) {

};

var LetterNode = function(next) {
  this.next = next || null;
  this.endWord = false;
};