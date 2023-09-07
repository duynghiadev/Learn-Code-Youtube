"use strict";

var API_STATUS1;

(function (API_STATUS1) {
  API_STATUS1[(API_STATUS1["PENDDING"] = 0)] = "PENDDING";
  API_STATUS1["FULFILLED"] = "FULFILLED asfdasfasf";
  API_STATUS1["REJECTED"] = "FULFILLED";
})(API_STATUS1 || (API_STATUS1 = {}));

//constant
//java

let a4 = API_STATUS1.PENDDING;
let a5 = API_STATUS1.FULFILLED;
let a6 = API_STATUS1.REJECTED;

//frontend : syntax
console.log(">>> a4 = ", a4);
console.log(">>> a5 = ", a5);
console.log(">>> a6 = ", a6);
