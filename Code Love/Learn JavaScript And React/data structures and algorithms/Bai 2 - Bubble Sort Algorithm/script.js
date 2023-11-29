// bubble sort part 2

let a = [100, 7, 5]

//yêu cầu sắp xếp mảng tăng dần [5,7,100]

//100,7,	5
//j = 0, 7,		100,5
//j = 1, 7,5,		100

for (let i = 0; i < a.length - 1; i++) {
	for (let j = 0; j < a.length - 1; j++) {
		console.log('step by step for loop:', a)
		console.table({
			i: i, j: j, a_j: a[j], a_j_1: a[j + 1]
		})
		
		if (a[j] > a[j + 1]) {
			let tmp = a[j]
			a[j] = a[j + 1]
			a[j + 1] = tmp
		}
	}
}

console.log('-----------------------------')
console.log('Result table a:', a)

// Dưới đây là các bước thuật toán này chạy:
//- khi i = 0; lúc này gặp loop j -> bạn sẽ được số lớn nhất nổi lên trên
//- khi i = 1; lúc này gặp loop j -> bạn sẽ được số lớn thứ hai nổi lên trên