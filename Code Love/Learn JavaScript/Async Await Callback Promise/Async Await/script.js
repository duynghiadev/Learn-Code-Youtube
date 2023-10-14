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
		xhttp.addEventListener('error', function (event) {
			reject(event)
		})
	})
}

// get posts of first user in list
async function getPostList() {
	try {
		// cosume promise => call api get list users
		const users = await asyncXmlCallApiPromise('https://jsonplaceholder.typicode.com/users')
		const userList = JSON.parse(users.responseText)
		const userIdFirst = userList[0].id
		const urlPostsByUserFirst = 'https://jsonplaceholder.typicode.com/users/' + userIdFirst + '/posts'
		const posts = await asyncXmlCallApiPromise(urlPostsByUserFirst)
		formatData(posts)
	} catch (error) {
		console.log(error)
	}
}
