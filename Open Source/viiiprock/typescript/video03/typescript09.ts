// 7:54 NonNullable
type Example = string | number | null | undefined;
type NonNullableExample = NonNullable<Example>; // string | number
const exampleValue: Example = "hello";
const nonNullableValue: NonNullableExample = exampleValue;
console.log("NonNullable:", nonNullableValue); // Output: "hello"

// 9:40 Parameters
function exampleFunction1(a: string, b: number): void {}
type Params = Parameters<typeof exampleFunction1>; // [string, number]
const params: Params = ["hello", 42];
console.log("Parameters:", params); // Output: ["hello", 42]

// 11:40 ConstructorParameters
class ExampleClass {
  constructor(a: string, b: number) {}
}
type ConstructorParams = ConstructorParameters<typeof ExampleClass>; // [string, number]
const constructorParams: ConstructorParams = ["hello", 42];
console.log("ConstructorParameters:", constructorParams); // Output: ["hello", 42]

// 12:48 ReturnType
function exampleFunction2(a: string, b: number): boolean {
  return true;
}
type ReturnTypeExample = ReturnType<typeof exampleFunction2>; // boolean
const returnValue: ReturnTypeExample = exampleFunction2("hello", 42);
console.log("ReturnType:", returnValue); // Output: true

// 13:37 InstanceType
class ExampleClass2 {
  a: string;
  b: number;

  constructor() {
    this.a = "";
    this.b = 0;
  }
}
type InstanceTypeExample = InstanceType<typeof ExampleClass2>; // ExampleClass2
const instanceValue: InstanceTypeExample = new ExampleClass2();
instanceValue.a = "hello";
instanceValue.b = 42;
console.log("InstanceType:", instanceValue); // Output: ExampleClass2 { a: "hello", b: 42 }

// 14:17 ThisParameterType
function exampleFunction3(this: Date, a: string): void {
  console.log("ThisParameterType: this date is", this.toDateString());
}
type ThisParamType = ThisParameterType<typeof exampleFunction3>; // Date
const thisParamValue: ThisParamType = new Date();
exampleFunction3.call(thisParamValue, "hello"); // Output: ThisParameterType: this date is ...

// 15:25 OmitThisParameter
function exampleFunction4(this: Date, a: string): void {
  console.log("OmitThisParameter: a is", a);
}
type OmitThisParamType = OmitThisParameter<typeof exampleFunction4>; // (a: string) => void
const omitThisParamFunction: OmitThisParamType = exampleFunction4.bind(
  new Date()
);
omitThisParamFunction("hello"); // Output: OmitThisParameter: a is hello

// 16:05 ThisType
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // this sẽ có kiểu D & M
};

let obj: ObjectDescriptor<{ x: number }, { getX(): number }> = {
  data: { x: 10 },
  methods: {
    getX() {
      return this.x;
    },
  },
};

if (obj.data && obj.methods) {
  const instance = { ...obj.data, ...obj.methods };
  console.log("ThisType:", instance.getX()); // Output: ThisType: 10
} else {
  console.log("ThisType: data or methods is undefined");
}
