function addNumbers_1(a: number, b: number): number {
  return a + b;
}

function addStrings_1(a: string, b: string): string {
  return a + b;
}

// 2 functions làm nhiệm vụ tương tự nhau => có thể gồm thành 1 với union type
function add_111(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") return a + b;

  if (typeof a === "string" && typeof b === "string") return a + b;
}

//overloading
function addNew_1(a: number, b: number): number;

function addNew_1(a: string, b: string): string;

function addNew_1(a: any, b: any) {
  return a + b;
}

console.log(
  ">>> check add new: ",
  addNew_1(6, 9),
  addNew_1(" Hoi Dan IT", " & Eric")
);

class Counter_1 {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      return values;
    }
    return ++this.current;
  }
}

let counter_111 = new Counter_1();

console.log(">>> check counter_111_1 = ", counter_111.count()); // return a number
console.log(">>> check counter_111 = ", counter_111.count(20)); // return an array
