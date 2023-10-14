function formatData(xhttp) {
	const posts = JSON.parse(xhttp.responseText)
	let postList = ''
	for (let post of posts) {
		postList += '<p>' + post.title + '</p>'
	}
	document.getElementById('post_list').innerHTML = postList
}

function asyncXmlCallApiPromise(url) {
	return new Promise(function (resolve, reject) {
		// code async
		const xhttp = new XMLHttpRequest()
		xhttp.open('GET', url, true)
		xhttp.send()
		
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState === 4 && xhttp.status === 200) {
				resolve(xhttp)
			}
		}
	})
}

// get posts of first user in list
function getPostList() {
	// cosume promise => call api get list users
	asyncXmlCallApiPromise('https://jsonplaceholder.typicode.com/users')
		.then(function (users) {
			const userList = JSON.parse(users.responseText)
			const userIdFirst = userList[0].id
			const urlPostsByUserFirst = 'https://jsonplaceholder.typicode.com/users/' + userIdFirst + '/posts'
			return asyncXmlCallApiPromise(urlPostsByUserFirst)
		})
		.then(function (posts) {
			formatData(posts)
		})
		.catch(function (error) {
			console.log(error)
		})
}
