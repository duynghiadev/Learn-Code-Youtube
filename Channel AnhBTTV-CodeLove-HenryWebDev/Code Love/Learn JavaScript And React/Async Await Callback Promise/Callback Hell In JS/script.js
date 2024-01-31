// call api and return success
function asyncXmlCallApi(url, callback) {
	const xhttp = new XMLHttpRequest()
	xhttp.open('GET', url, true)
	xhttp.send()
	
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			// data return success
			callback(xhttp)
		}
	}
}

function formatData(xhttp) {
	const posts = JSON.parse(xhttp.responseText)
	let postList = ''
	for (let post of posts) {
		postList += '<p>' + post.title + '</p>'
		document.getElementById('list_post').innerHTML = postList
	}
}

// get all posts of fist user in list
function getPostUser() {
	asyncXmlCallApi('https://jsonplaceholder.typicode.com/users', function (data) {
		const users = JSON.parse(data.responseText)
		const userIdFirst = users[0].id
		const urlPostsByUserFirst = 'https://jsonplaceholder.typicode.com/users/' + userIdFirst + '/posts'
		
		asyncXmlCallApi(urlPostsByUserFirst, function (dataPost) {
			formatData(dataPost)
		})
	})
}
