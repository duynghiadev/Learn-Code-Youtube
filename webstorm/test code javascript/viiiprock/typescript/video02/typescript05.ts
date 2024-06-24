// keyof
type Point = { x: number; y: number };
type P = keyof Point;

const Hello: P = "x";

type Arrayish = {
  [n: number]: string;
};

type A = keyof Arrayish;

const Id: A = 123456; // Correct ✅
// const Id_1: A = '123456' // Wrong ❌
