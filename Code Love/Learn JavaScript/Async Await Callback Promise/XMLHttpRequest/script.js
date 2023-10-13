function getListUser() {
	const url = 'https://jsonplaceholder.typicode.com/users'
	const xhttp = new XMLHttpRequest()
	xhttp.open('GET', url, true)
	xhttp.send()
	
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			// data return success
			const users = JSON.parse(xhttp.responseText)
			
			// 2. format data and append list user
			let userList = ''
			for (let user of users) {
				userList += '<p>' + user.name + '</p>'
			}
			const listUser = document.getElementById('list_user')
			listUser.innerHTML = userList
			console.log(users)
		}
	}
}
