import _ from "lodash";
import { sayHello } from "./libs/hello";
import { sum } from "./libs/sum";
import "./libs/other";

console.log("duynghiadev");
console.log(sum(1, 3));

sayHello();

const ronaldo = "messi";
console.log(ronaldo);
console.log(_.size([1, 2, 3]));

const PI = 3.14;

console.log(`Pi is: ${PI}`);
