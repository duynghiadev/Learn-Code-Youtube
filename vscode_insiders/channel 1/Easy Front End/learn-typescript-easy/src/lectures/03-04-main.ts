// Number enum 🚀
enum Status1 {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}

enum Status2 {
  PENDING = 3, // 3
  IN_PROGRESS, // 4
  DONE, // 5
  CANCELLED, // 6
}

enum Status3 {
  PENDING = 3,
  IN_PROGRESS = 5,
  DONE = 8,
  CANCELLED = 10,
}

enum Status4 {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}
// can assign any number to your enum variable
const stats1: Status4 = Status4.PENDING
const stats2: Status4 = 1
const stats3: Status4 = -1

// number enum --> support reverse mapping
console.log('Number enum 🚀', Status4[0]) // 'PENDING'
console.log('Number enum 🚀', Status4['DONE']) // 2

// STRING ENUM 🚀

enum MediaTypes {
  JSON = 'application/json',
  XML = 'application/xml',
}
fetch('https://example.com/api/endpoint', {
  headers: {
    Accept: MediaTypes.JSON,
  },
}).then((response) => {
  // ...
})

// Bonus: How enum compiled to Javascript 🚀

enum Status5 {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}
// compiled to javascript 👇
// ;('use strict')
// var Status5
// ;(function (Status5) {
//   Status5[(Status5['PENDING'] = 0)] = 'PENDING'
//   Status5[(Status5['IN_PROGRESS'] = 1)] = 'IN_PROGRESS'
//   Status5[(Status5['DONE'] = 2)] = 'DONE'
//   Status5[(Status5['CANCELLED'] = 3)] = 'CANCELLED'
// })(Status5 || (Status5 = {}))
// Status5['PENDING']; // 0
// Status5[0]; // 'PENDING'

enum MediaTypes {
  JSON1 = 'application/json',
  XML1 = 'application/xml',
}
// compiled to javascript 👇
// ;('use strict')
// var MediaTypes
// ;(function (MediaTypes) {
//   MediaTypes['JSON1'] = 'application/json'
//   MediaTypes['XML1'] = 'application/xml'
// })(MediaTypes || (MediaTypes = {}))
// MediaTypes["JSON"]; // "application/json"
// MediaTypes["application/json"]; // undefined
