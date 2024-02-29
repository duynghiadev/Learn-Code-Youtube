/**
 * Dùng phương pháp tham trị:
 * - nó không liên quan đến các tác vụ chạy trong hàm
 * - trong hàm dù có thay đổi như thế nào thì khi thực thi hàm thì nó chỉ quan tâm đến các giá trị bên ngoài thôi. Bên ngoài truyền cái gì thì khi thực thi hàm -> thì hàm nhận cái đó
 */
function PassByvalue(a, b) {
  let tmp
  tmp = b
  b = a
  a = tmp
}

let a = 1
let b = 2

PassByvalue(a, b)
console.log(a, b)

/**
 * Dùng phương pháp tham chiếu:
 * - Khi dùng phương pháp này thì các thuộc tính trong object sẽ bị thay đổi theo
 * - Khi có những gì thay đổi ở bên trong hàm thì nó đều liên quan đến object mà hàm đang gọi đến
 * - Nếu trong hàm có thay đổi giá trị hoặc giá trị kia thì khi thực thi hàm -> thì các giá trị trong object sẽ thay đổi luôn
 */
// Định nghĩa hàm PassByReference nhận một đối tượng làm tham số
function PassByReference(obj) {
  let tmp = obj.b1 // 2
  obj.b1 = obj.a1 // 1
  obj.a1 = tmp // 2
}

// Khai báo một đối tượng chứa giá trị a và b
let values = {
  a1: 1,
  b1: 2
}

// Gọi hàm PassByReference và truyền đối tượng làm tham số
PassByReference(values)

// In ra giá trị của a và b sau khi hàm PassByReference được gọi
console.log(values.a1, values.b1)

console.log('-------------------------------------------')

/**
 * Trong ví dụ này, outerFunction nhận một tham số outerVariable và chứa một hàm bên trong gọi là innerFunction. Khi bạn gọi outerFunction("Outer Value"), nó tạo ra một closure với giá trị của outerVariable là "Outer Value". Sau đó, khi innerFunction được gọi bên trong outerFunction với tham số "Inner Value", nó có thể truy cập cả outerVariable và innerVariable.
 *
 * Closures cho phép hàm innerFunction truy cập biến outerVariable của hàm bên ngoài của nó, ngay cả khi hàm outerFunction đã kết thúc thực thi. Điều này giúp bảo toàn giá trị của outerVariable trong bối cảnh của closure.
 */
function outerFunction(outerVariable) {
  // Inner function (closure)
  function innerFunction(innerVariable) {
    console.log('Outer Variable:', outerVariable)
    console.log('Inner Variable:', innerVariable)
  }

  // Gọi innerFunction từ outerFunction
  innerFunction('Inner Value')
}

// Gọi outerFunction để tạo một closure
outerFunction('Outer Value')

console.log('-------------------------------------------')

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// Ví dụ về higher-order function nhận hàm làm tham số
function operationOnArray(array, operation) {
  return array.map(operation)
}

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = operationOnArray(numbers, function (number) {
  return number * number
})
console.log(squaredNumbers) // Output: [1, 4, 9, 16, 25]

console.log('-------------------------------------------')

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
// Example Closure Basic
function outerFunction_1(outerVariable) {
  // innerFunction là một closure
  function innerFunction(innerVariable) {
    console.log(outerVariable + ' ' + innerVariable)
  }

  return innerFunction
}

// Tạo một closure với outerVariable là 'Hello'
const closureExample1 = outerFunction_1('Hello')

// Tạo một closure với outerVariable là 'Hi'
const closureExample2 = outerFunction_1('Hi')

// Gọi các closure với innerVariable
closureExample1('World') // Output: Hello World
closureExample2('Universe') // Output: Hi Universe

console.log('-------------------------------------------')

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
// Example Closure Advance
function createTaskExecutor(taskName) {
  // Biến local được chia sẻ qua closure
  let taskStatus = 'Not started'

  // Hàm closure để thực hiện công việc và cập nhật trạng thái
  function taskExecutor() {
    console.log(`Task "${taskName}" is currently ${taskStatus}.`)
    taskStatus = 'In progress'

    // Simulate asynchronous task
    setTimeout(function () {
      console.log(`Task "${taskName}" is now completed.`)
      taskStatus = 'Completed'
    }, 2000)
  }

  return taskExecutor
}

// Tạo một closure cho công việc "Download Data"
const downloadTask = createTaskExecutor('Download Data')

// Tạo một closure cho công việc "Process Data"
const processTask = createTaskExecutor('Process Data')

// Thực hiện các công việc
downloadTask() // Output: Task "Download Data" is currently Not started.
// (Sau 2 giây) Task "Download Data" is now completed.

processTask() // Output: Task "Process Data" is currently Not started.
// (Sau 2 giây) Task "Process Data" is now completed.

// Mỗi closure giữ lại trạng thái của nó, không ảnh hưởng đến closure khác

console.log('-------------------------------------------')

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// print total two number
function addNumber(a) {
  return function (b) {
    return a + b
  }
}

const addTwo = addNumber(2)
const addFive = addNumber(5)

console.log(addTwo(3)) // Output: 5
console.log(addFive(5)) // Output: 10

console.log('-------------------------------------------')

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

/**
 * POSSIBLE WAYS TO REMOVE DUPLICATE FROM ARRAY USING JAVASCRIPT FUNCTION
 *
 * Link video: https://bom.so/VLmpqX
 */
const myArray = [1, 2, 3, 4, 5, 6, 5, 1, 4]

// first by using filter
function removeDuplicates_1(arr) {
  return arr.filter((value, index, self) => {
    console.log(`value: ${value}, index: ${index}, self: ${self}`)
    console.log('self.indexOf(value) === index:', self.indexOf(value) === index)
    console.log('-------------------------------------------')

    return self.indexOf(value) === index
  })
}
console.log('function removeDuplicates_1:', removeDuplicates_1(myArray))

console.log('-------------------------------------------')

// second method by using set
function removeDuplicates_2(arr) {
  return Array.from(new Set(arr))
}
console.log('removeDuplicates_2:', removeDuplicates_2(myArray))

console.log('-------------------------------------------')

// third method by using reduce
function removeDuplicates_3(arr) {
  return arr.reduce((unique, item) => {
    console.log('unique:', unique)
    console.log('item:', item)
    return unique.includes(item) ? unique : [...unique, item]
  }, [])
}
console.log('function removeDuplicates_3:', removeDuplicates_3(myArray))

console.log('-------------------------------------------')

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// Chú ý đoạn code này, nhiều người chưa hiểu cách nó hoạt động ra sao. Nên tìm hiểu

let counter = (function () {
  let k = 0
  return () => k++
})()

console.log(counter())
console.log(counter())
console.log(counter())

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// Initialize variable a1 with value 10
let a1 = 10

// Subtract 2 + 1 from a1 and assign the result to b1
let b1 = (a1 -= 2 + 1)

// Output the value of a1 to the console
console.log('Result a1:', a1)

// Output the value of b1 to the console
console.log('Result b1:', b1)

/**
 * This is a explaint code above:
 *
 * // Initialize variable a1 with value 10
 * let a1 = 10;
 *
 * // Calculate the value to subtract from a1
 * let subtractValue = 2 + 1;
 *
 * // Subtract the calculated value from a1 and store the result in a1
 * a1 = a1 - subtractValue;
 *
 * // Assign the result to variable b1
 * let b1 = a1;
 */

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
