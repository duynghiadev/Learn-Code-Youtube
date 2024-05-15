const s = Date.now()

// A. code đồng bộ
let result = 0
for (let i = 0; i < 2000000; i++) {
  result = result + i
}

// B. code đồng bộ sẽ bị chặn, chạy sau A
console.log(`Sync: ${result}-${Date.now() - s}`)

// C. code bất đồng bộ
setTimeout(() => {
  console.log(`setTimeout 1st: ${Date.now() - s}`)
}, 1000)

// D. code bất đồng bộ
setTimeout(() => {
  console.log(`setTimeout 2st: ${Date.now() - s}`)
}, 3000)

// ⌚⏲⏲⏲⏲⏲ học tới phút 23:18 ⌚⏲⏲⏲⏲⏲
