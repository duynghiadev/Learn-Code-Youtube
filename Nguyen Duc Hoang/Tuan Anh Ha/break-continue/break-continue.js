/**
 * BREAK
 * CONTINUE
 */
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    break
  }
  console.log('i:', i)
}

for (let j = 0; j < 10; j++) {
  if (j === 6) {
    continue
  }
  console.log('j:', j)
}
