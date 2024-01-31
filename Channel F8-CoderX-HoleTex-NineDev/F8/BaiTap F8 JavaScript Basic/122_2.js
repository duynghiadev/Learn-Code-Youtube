Array.prototype.forEach2 = function (data) {
  length = this.length;
  for (var i = 0; i < length; i++) {
    data(this[i], i);
  }
};

// ------------- reduce ---------------
Array.prototype.reduce2 = function (callBack, creation) {
  var i = 0;
  if (arguments.length < 2) {
    i = 1;
    creation = this[0];
  }
  var length = this.length;
  for (; i < length; i++) {
    creation = callBack(creation, this[i], i, this);
  }
  return creation;
};

// -------------- find ---------------
Array.prototype.find2 = function (data) {
  var length = this.length;
  for (var i = 0; i < length; i++) {
    if (data(this[i], i)) {
      return this[i];
    }
  }
};

//------------- filter -----------------------
Array.prototype.filter2 = function (data) {
  var length = this.length;
  var allFind = [];
  for (var i = 0; i < length; i++) {
    if (data(this[i], i)) {
      allFind.push(this[i]);
    }
  }
  return allFind;
};
