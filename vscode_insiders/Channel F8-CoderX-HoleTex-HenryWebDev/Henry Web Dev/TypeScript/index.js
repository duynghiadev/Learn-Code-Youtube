var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var last = function (arr) {
  return arr[arr.length - 1];
};
var l1 = last([1, 2, 3]);
console.log("l1:", l1);
console.log("=======================");
var lastT = function (arr) {
  return arr[arr.length - 1];
};
var l3 = lastT([1, 2, 3]);
var l4 = lastT(["a", "b"]);
var l5 = lastT(["d", "e"]);
console.log("l3: ".concat(l3, ", l4: ").concat(l4, ", l5; ").concat(l5));
console.log("=======================");
var makeArr = function (x) {
  return [x];
};
var m = makeArr(5);
var makeArrT = function (x) {
  return [x];
};
var m3 = makeArrT(4);
var m4 = makeArrT("b");
console.log("m3: ".concat(m3, ", m4: ").concat(m4));
console.log("=======================");
var makeArrXY = function (x, y) {
  return [x, y];
};
var m5 = makeArrXY(5, 6);
var m6 = makeArrXY("b", 5);
var m7 = makeArrXY("a", "b");
console.log("m5: ".concat(m5, ", m6: ").concat(m6, ", m7: ").concat(m7));
console.log("=======================");
var makeTuple = function (x, y) {
  return [x, y];
};
var m8 = makeTuple("x", 5);
var m9 = makeTuple("a", "b");
var m10 = makeTuple("a", 10);
var m11 = makeTuple(null, 22);
console.log(
  "m8: "
    .concat(m8, ", m9: ")
    .concat(m9, ", m10: ")
    .concat(m10, ", m11: ")
    .concat(m11)
);
console.log("=======================");
var makeTupleWithDefault = function (x, y) {
  return [x, y];
};
var m12 = makeTupleWithDefault("a", 3);
console.log("m12: ".concat(m12));
console.log("=======================");
// GENERICS EXTENDS
var makeFullname = function (obj) {
  return __assign(__assign({}, obj), {
    fullName: "".concat(obj.firstName, " ").concat(obj.lastName),
  });
};
var makeFullnameConstraint = function (obj) {
  return __assign(__assign({}, obj), {
    fullName: "".concat(obj.firstName, " ").concat(obj.lastName),
  });
};
var n1 = makeFullnameConstraint({
  firstName: "duynghiadev",
  lastName: "web dev",
});
console.log("n1:", n1);
console.log("=======================");
var makeFullNameConstraintWithGenerics = function (obj) {
  return __assign(__assign({}, obj), {
    fullName: "".concat(obj.firstName, " ").concat(obj.lastName),
  });
};
var n3 = makeFullNameConstraintWithGenerics({
  firstName: "henry",
  lastName: "web dev",
  age: 30,
  gender: "male",
});
console.log("n3:", n3);
console.log("=======================");
var addNewEmployee = function (employee) {
  var uid = Math.floor(Math.random() * 100);
  return __assign(__assign({}, employee), { uid: uid });
};
var empOne = addNewEmployee({ name: "henry", age: 30 });
console.log("empOne:", empOne);
console.log("=======================");
var addNewEmployeeT = function (employee) {
  var uid = Math.floor(Math.random() * 100);
  return __assign(__assign({}, employee), { uid: uid });
};
var empTwo = addNewEmployeeT({ name: "duynghiadev", age: 23, male: true });
console.log("empTwo:", empTwo);
console.log("empTwo.name:", empTwo.name);
console.log("=======================");
var addNewEmployeeTWithConstraint = function (employee) {
  var uid = Math.floor(Math.random() * 100);
  return __assign(__assign({}, employee), { uid: uid });
};
var empThree = addNewEmployeeTWithConstraint({
  name: "duynghiadev",
  age: 23,
});
console.log("empThree:", empThree);
console.log("=======================");
var numbersResource = {
  uid: 2,
  name: "Numbers",
  data: [1, 2, 3],
};
var resourceOne = {
  uid: 1,
  name: "duynghiadev",
  data: "ronaldo",
};
var resourceTwo = {
  uid: 2,
  name: "duynghiadev",
  data: { name: "Avenger" },
};
var resourceThree = {
  uid: 1,
  name: "Developer",
  data: ["HTML", "CSS", "JAVASCRIPT"],
};
