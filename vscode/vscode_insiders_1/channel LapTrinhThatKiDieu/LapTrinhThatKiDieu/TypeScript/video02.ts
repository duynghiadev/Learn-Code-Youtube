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

type Value = RangeNumber<0, 101>;

type Percent = `${Value}%`;

let current: Percent = "10%";

current = "100%";
current = "102%";
current = "02%";

type Align = "left" | "right" | "center";
type FlexboxAlign = `align-items: ${Align}`;

type PositiveInt = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Zero = 0;
type ValidNumber = Zero | PositiveInt;

type LPercent = `${ValidNumber}` | `${PositiveInt}${ValidNumber}%` | "100%";

let value: LPercent = "10%";

value = "01%";
value = "101%";
value = "34%";
