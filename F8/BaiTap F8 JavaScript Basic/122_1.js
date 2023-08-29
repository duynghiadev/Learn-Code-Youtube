// ForEach2
var arr = ["LOL", "CSGO", "PUBG", "FIFA"];

Array.prototype.forEach2 = function (callback) {
  var arrLength = arr.length;
  for (var i = 0; i < arrLength; i++) {
    callback(this[i], i);
  }
};

arr.forEach2((item, index) => {
  console.log(index, item);
});

//------------------------------
// find2
var arr2 = [
  {
    name: "Thanh Huy",
    age: 19,
  },
  {
    name: "Thanh Huy2",
    age: 19,
  },
  {
    name: "Thanh Huy3",
    age: 19,
  },
  {
    name: "Thanh Huy4",
    age: 19,
  },
];

Array.prototype.find2 = function (callback) {
  var arrLength = arr2.length;
  for (var i = 0; i < arrLength; i++) {
    if (callback(this[i], i)) {
      return this[i];
    }
  }
};

var result = arr2.find2((item, index) => {
  return item.name === "Thanh Huy2";
});

console.log(result);
//---------------------------
// filter2

var arr3 = [
  {
    name: "Thanh Huy",
    age: 19,
  },
  {
    name: "Thanh Huy2",
    age: 19,
  },
  {
    name: "Thanh Huy2",
    age: 20,
  },
  {
    name: "Thanh Huy4",
    age: 19,
  },
];

Array.prototype.filter2 = function (callback) {
  var output = [];
  var arrLength = arr3.length;
  for (var i = 0; i < arrLength; i++) {
    if (callback(this[i], i)) {
      output.push(this[i]);
    }
  }
  return output;
};

var result = arr3.filter2((item, index) => {
  return item.name === "Thanh Huy2";
});

console.log(result);

//-----------------------------
// map2

var arr4 = ["JS", "Java", "PHP", "GO"];

Array.prototype.map2 = function (callback) {
  var output = [];
  var arrLength = arr4.length;
  for (var i = 0; i < arrLength; i++) {
    var result = callback(this[i], i);
    output.push(result);
  }

  return output;
};

var htmls = arr4.map2((item, index) => {
  return `<h2>${item}</h2>`;
});

console.log(htmls.join("\n"));
// -------------------------
// reduce2 có biến inittial value

var course = [
  {
    name: "JS",
    coin: 190,
  },
  {
    name: "Java",
    coin: 250,
  },
  {
    name: "PHP",
    coin: 500,
  },
  {
    name: "GO",
    coin: 460,
  },
];

Array.prototype.reduce2 = function (callback, result) {
  var arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    result = callback(result, this[i]);
  }

  return result;
};

var total = course.reduce2((Saved, value) => {
  return Saved + value.coin;
}, 0);

console.log(total);

//-------------------------
// reduce2 không biến inittial value

var course = [
  {
    name: "JS",
    coin: 190,
  },
  {
    name: "Java",
    coin: 250,
  },
  {
    name: "PHP",
    coin: 500,
  },
  {
    name: "GO",
    coin: 460,
  },
];

Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0].coin;
  }
  var arrLength = this.length;
  for (; i < arrLength; i++) {
    result = callback(result, this[i]);
  }

  return result;
};

var total = course.reduce2((Saved, value) => {
  return Saved + value.coin;
});

console.log(total);

// ----------------------
// every2

var course = [
  {
    name: "JS",
    coin: 100,
  },
  {
    name: "Java",
    coin: 250,
  },
  {
    name: "PHP",
    coin: 500,
  },
  {
    name: "GO",
    coin: 900,
  },
];

Array.prototype.every2 = function (callback) {
  var flag = false;
  var arrLength = this.length;
  for (var i = 0; i < arrLength; i++) {
    if (callback(this[i], i)) {
      if (i === arrLength - 1) {
        flag = true;
        return flag;
      } else {
        continue;
      }
    } else {
      return flag;
    }
  }
};

var flag = course.every2((item, index) => {
  return item.coin > 100;
});

console.log(flag);

//----------------------
// some2

var course = [
  {
    name: "JS",
    coin: 10,
  },
  {
    name: "Java",
    coin: 25,
  },
  {
    name: "PHP",
    coin: 50,
  },
  {
    name: "GO",
    coin: 900,
  },
];

Array.prototype.every2 = function (callback) {
  var flag = true;
  var arrLength = this.length;
  for (var i = 0; i < arrLength; i++) {
    if (callback(this[i], i)) {
      return flag;
    } else {
      if (i === arrLength - 1) {
        flag = false;
        return flag;
      } else {
        continue;
      }
    }
  }
};

var flag = course.every2((item, index) => {
  return item.coin > 100;
});

console.log(flag);
