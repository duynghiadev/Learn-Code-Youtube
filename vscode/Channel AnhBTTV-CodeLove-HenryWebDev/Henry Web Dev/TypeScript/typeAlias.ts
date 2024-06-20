// TYPE ALIAS
type StringOrNumber = string | number;
type Student = {
  name: string;
  id: StringOrNumber;
};

const studentDetails = (id: StringOrNumber, studentName: string): void => {
  console.log(`Student ${studentName} has is: ${id}`);
};
studentDetails(123, "duynghiadev");
studentDetails("345", "son");

console.log("========================");

const greet = (user: Student) =>
  console.log(`${user.name} with id ${user.id} says hello`);
greet({ name: "duynghiadev", id: "123" });
