// GENERICS
type strArray = Array<string>;
type numArr = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);
console.log("l1:", l1);

console.log("=======================");

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]);
const l4 = lastT(["a", "b"]);
const l5 = lastT<string>(["d", "e"]);
console.log(`l3: ${l3}, l4: ${l4}, l5; ${l5}`);

console.log("=======================");

const makeArr = (x: number) => [x];
const m = makeArr(5);

const makeArrT = <T>(x: T) => [x];
const m3 = makeArrT(4);
const m4 = makeArrT("b");
console.log(`m3: ${m3}, m4: ${m4}`);

console.log("=======================");

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m5 = makeArrXY(5, 6);
const m6 = makeArrXY("b", 5);
const m7 = makeArrXY("a", "b");
console.log(`m5: ${m5}, m6: ${m6}, m7: ${m7}`);

console.log("=======================");

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m8 = makeTuple("x", 5);
const m9 = makeTuple("a", "b");
const m10 = makeTuple<string, number>("a", 10);
const m11 = makeTuple<string | null, number>(null, 22);
console.log(`m8: ${m8}, m9: ${m9}, m10: ${m10}, m11: ${m11}`);

console.log("=======================");

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m12 = makeTupleWithDefault<string | null>("a", 3);
console.log(`m12: ${m12}`);

console.log("=======================");

// GENERICS EXTENDS

const makeFullname = (obj: any) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const makeFullnameConstraint = (obj: {
  firstName: string;
  lastName: string;
}) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n1 = makeFullnameConstraint({
  firstName: "duynghiadev",
  lastName: "web dev",
});
console.log("n1:", n1);

console.log("=======================");

const makeFullNameConstraintWithGenerics = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n3 = makeFullNameConstraintWithGenerics({
  firstName: "henry",
  lastName: "web dev",
  age: 30,
  gender: "male",
});

console.log("n3:", n3);

console.log("=======================");

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empOne = addNewEmployee({ name: "henry", age: 30 });
console.log(`empOne:`, empOne);

console.log("=======================");

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empTwo = addNewEmployeeT({ name: "duynghiadev", age: 23, male: true });
console.log("empTwo:", empTwo);
console.log("empTwo.name:", empTwo.name);

console.log("=======================");

const addNewEmployeeTWithConstraint = <T extends { name: string }>(
  employee: T
) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empThree = addNewEmployeeTWithConstraint({
  name: "duynghiadev",
  age: 23,
});
console.log("empThree:", empThree);

console.log("=======================");

// GENERICS IN INTERFACE

interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

type NumberResource = Resource<number[]>;

const numbersResource: NumberResource = {
  uid: 2,
  name: "Numbers",
  data: [1, 2, 3],
};

const resourceOne: Resource<string> = {
  uid: 1,
  name: "duynghiadev",
  data: "ronaldo",
};

const resourceTwo: Resource<object> = {
  uid: 2,
  name: "duynghiadev",
  data: { name: "Avenger" },
};

const resourceThree: Resource<string[]> = {
  uid: 1,
  name: "Developer",
  data: ["HTML", "CSS", "JAVASCRIPT"],
};
