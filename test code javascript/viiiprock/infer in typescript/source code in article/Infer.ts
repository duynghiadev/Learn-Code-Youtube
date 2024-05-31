/* Sử dụng infer
Từ khóa infer thường được sử dụng trong điều kiện để gán kiểu
*/
// Giờ mình cho một ví dụ
type ArrayElementType<T> = T extends (infer E)[] ? E : T;
// Ở đây infer sẽ khai báo một type mới là E

type T8 = ArrayElementType<number[]>;
// Điều kiện này thỏa mãn do kiểu infer là number array => T8 có kiểu number

type T9 = ArrayElementType<{ age: number }>;
// điều kiện này không thỏa mãn nên lấy trực tiếp type bên trong

type T10 = ArrayElementType<[string, number]>;
// Điều kiện này cũng thõa mãn nên nó lấy kiểu union là string | number

type ElementIdType<T> = T extends { id: infer IdType } ? IdType : T;
type UserIdType = ElementIdType<{ id: number; name: string }>;
type ProjectIdType = ElementIdType<{ id: string; title: string }>;
