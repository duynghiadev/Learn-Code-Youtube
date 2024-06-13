- Hoisting với "var", "function"

1. Xét ví dụ sau:

   console.log(age) // undefined

   console.log(fullName) // ReferenceError: fullName is not defined
   var age = 16

2. Xét ví dụ sau:

   console.log(sum(6, 9)) // 15

   function sum(a, b){

   return a + b
   }

## Lưu ý: Phần khai báo được đưa lên, phần gán không được đưa lên

---

- Hosting với "let", "const"

1. Xét ví dụ sau:

   {

   console.log(fullName) // ReferenceError: Cannot access

   'fullName' before initialization
   let fullName = "Nguyen Van A"

   }
