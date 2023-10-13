// bubble sort

let a = [100,// a[j] -> a[0]
	7 // a[j+1] a[j]
]

let b = [10, 20]

// yeu cau sap xep mang tang dan
console.log('array length of a:', a.length)
console.log('array length of b:', b.length)

for (let j = 0; j < a.length - 1; j++) {
	console.table({
		j: j, // 0
		a_j: a[j], // 100
		a_j_1: a[j + 1] // 7
	})
	
	if (a[j] > a[j + 1]) {
		let tmp = a[j]
		a[j] = a[j + 1]
		a[j + 1] = tmp
	}
}

console.log('Table a:', a)

for (let i = 0; i < b.length - 1; i++) {
	console.table({
		i: i, // 0
		b_i: b[i],//10
		b_i_1: b[i + 1]//20
	})
	
	if (b[i] > b[i + 1]) {
		let result = b[i]
		b[i] = b[i + 1]
		b[i + 1] = result
	}
}

console.log('Table b:', b)