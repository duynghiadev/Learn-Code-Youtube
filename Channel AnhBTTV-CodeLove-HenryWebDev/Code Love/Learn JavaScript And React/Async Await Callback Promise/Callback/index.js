// solution 1
function showNameUser(callback) {
	const name = 'nghia'
	callback(name)
}

showNameUser(function (name) {
	console.log('name:', name)
})

//solution 2
function showNameUser_2(callback_2) {
	const name_2 = 'buck'
	callback_2(name_2)
}

const getName = function (name_2) {
	console.log('name:', name_2)
}

showNameUser_2(getName)

/*
 * - callback này được áp dụng nhiều nhất là khi sử dụng trong reactjs. Nó được truyền từ con
 *  lên cha (thông qua các props)
 */
