const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(">>> check sum: ", sum(2, 4));

const handleLogs = (message: string): void => {
  console.log(">>> message: ", message);
};

handleLogs("Duy Nghia Dev");
