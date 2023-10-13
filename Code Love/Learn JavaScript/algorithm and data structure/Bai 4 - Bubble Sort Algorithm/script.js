// bubble sort part 2

let a = [100, 7, 5, 2, 8, 9, 400, 100, 150]

//yêu cầu sắp xếp mảng tăng dần
for (let i = 0; i < a.length - 1; i++) {
	for (let j = a.length - 1; j > i; j--) {
		if (a[j] < a[j - 1]) {
			let tmp = a[j]
			a[j] = a[j - 1]
			a[j - 1] = tmp
		}
	}
}

console.log(a)
console.log('hello')
