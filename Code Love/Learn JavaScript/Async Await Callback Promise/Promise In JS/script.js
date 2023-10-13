// 1. Create Promise
function createPromise() {
	const resolveFlag = true
	return new Promise(function (resolve, reject) {
		// promise run async
		setTimeout(() => {
			if (resolveFlag) {
				resolve('get user from database')
			} else {
				reject('error here')
			}
		}, 1000)
	})
}

initialPromise = createPromise()

initialPromise
	.then(function (dataSuccess) {
		console.log('dataSuccess:', dataSuccess)
	})
	.catch(function (error) {
		console.log('error:', error)
	})
