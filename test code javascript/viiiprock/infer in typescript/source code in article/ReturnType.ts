type FunctionReturnType<T> = T extends (...args: any) => infer R ? R : T;

type R = FunctionReturnType<(name: string) => string>;

type E = FunctionReturnType<{ name: string }>;
// Do <T> đang là generic, vì vậy chúng ta có thể gán được kiểu bất kỳ
