function formatData(xhttp) {
	const users = JSON.parse(xhttp.responseText)
	let userList = ''
	for (let user of users) {
		userList += '<p>' + user.name + '</p>'
	}
	document.getElementById('list_user').innerHTML = userList
}

// call api and return data
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

function getListUser() {
	asyncXmlCallApi('https://jsonplaceholder.typicode.com/users', function (data) {
		formatData(data)
		console.log(data)
	})
}
