// bubble sort

let a = [100,// a[j] -> a[0]
	7 // a[j+1] a[j]
]

// yeu cau sap xep mang tang dan

for (let j = 0; j < a.length - 1; j++) {
	console.table({
		j: j, a_j: a[j], a_j_1: a[j + 1]
	})

	if (a[j] > a[j + 1]) {
		let tmp = a[j]
		a[j] = a[j + 1]
		a[j + 1] = tmp
	}
}

console.log('Table:', a)