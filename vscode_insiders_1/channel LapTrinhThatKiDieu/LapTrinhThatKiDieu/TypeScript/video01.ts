// Enumerate<N, Acc> creates a tuple of numbers from 0 to N-1
type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

// RangeNumber<Start, End> creates a range of numbers from Start to End-1
type RangeNumber<Start extends number, End extends number> = Exclude<
  Enumerate<End>,
  Enumerate<Start>
>;

// Value is a type representing numbers from 20 to 100
type Value = RangeNumber<20, 101>;

// Percent is a type representing the Value numbers as a percentage string
type Percent = `${Value}%`;

// Currently learning TypeScript Hay Ho: Phần 1 - Recursive & Conditional Types

// Testing Percent type with valid and invalid values
let current: Percent = "20%"; // valid

console.log(current); // should log '20%'

// Valid values
current = "100%";
console.log(current); // should log '100%'

// Invalid values - will cause TypeScript errors
// current = '102%'; // TypeScript Error: Type '"102%"' is not assignable to type 'Percent'.
// current = '02%';  // TypeScript Error: Type '"02%"' is not assignable to type 'Percent'.

// Additional test cases
current = "50%"; // valid
console.log(current); // should log '50%'

current = "75%"; // valid
console.log(current); // should log '75%'
