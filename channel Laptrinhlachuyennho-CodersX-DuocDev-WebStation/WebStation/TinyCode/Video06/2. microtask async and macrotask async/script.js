// 2. microtask async and macrotask async
// 3. microtask async -> async and promise.resolve() and queueMicrotask

const abc = async () => {
  console.log(1) // sync
  await Promise.resolve(2).then(console.log) // async microtask
  console.log(3) // sync (after await) -> async microtask
}

setTimeout(() => {
  console.log(4) // async - macrotask
}, 0)

abc()

queueMicrotask(() => {
  console.log(5) // async microtask
})

Promise.resolve(6).then(console.log) // async - microtask
console.log(7) // sync

// sync: 1 - 7
// async microtask: 2 - 5 - 6 - 3
// async macrotask: 4
