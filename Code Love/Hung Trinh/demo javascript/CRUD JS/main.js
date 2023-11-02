function resetForm() {
    if (document.getElementById('male').checked) {
        document.getElementById('male').checked = false
    }
    if (document.getElementById('female').checked) {
        document.getElementById('female').checked = false
    }
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('address').value = ''
    document.getElementById('dob').value = ''
}

function saveStudent() {
    let gender = document.querySelector('input[name = gender]:checked')
        ? document.querySelector('input[name = gender]:checked').value : '';

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let dob = document.getElementById('dob').value;

    if (!gender) {
        document.getElementById('errorGender').innerText = 'vui long chon gioi tinh';
    } else {
        document.getElementById('errorGender').innerText = '';
    }

    if (!name) {
        document.getElementById('errorName').innerText = 'vui long dien ho va ten';
    } else {
        document.getElementById('errorName').innerText = '';
    }

    if (!email) {
        document.getElementById('errorEmail').innerText = 'vui long dien email';
    } else {
        document.getElementById('errorEmail').innerText = '';
    }

    if (!phone) {
        document.getElementById('errorPhone').innerText = 'vui long dien so dien thoai';
    } else {
        document.getElementById('errorPhone').innerText = '';
    }

    if (!address) {
        document.getElementById('errorAdd').innerText = 'vui long dien dia chi';
    } else {
        document.getElementById('errorAdd').innerText = '';
    }

    if (!dob) {
        document.getElementById('errorDob').innerText = 'vui long chon ngay sinh';
    } else {
        document.getElementById('errorDob').innerText = '';
    }


    if (gender && name && email && phone && address && dob) {
        let listStudents = localStorage.getItem('FE4') ? JSON.parse(localStorage.getItem('FE4')) : [];
        listStudents.push({
            gender: gender,
            name: name,
            phone: phone,
            email: email,
            address: address,
            dob: dob,
        });
        localStorage.setItem('FE4', JSON.stringify(listStudents))
    }


    resetForm()
    renderStudent()
}

function renderStudent() {
    let listStudents = localStorage.getItem('FE4') ? JSON.parse(localStorage.getItem('FE4')) : [];
    let student = `<tr>
        <th>id</th>
        <th>name</th>
        <th>gender</th>
        <th>email</th>
        <th>phone</th>
        <th>address</th>
        <th>dob</th>
        <th>action</th>
    </tr>`
    listStudents.forEach((value, index) => {
        student += `<tr>
            <td align="center">${index}</td>
            <td>${value.name}</td>
            <td>${value.gender}</td>
            <td>${value.email}</td>
            <td>${value.phone}</td>
            <td>${value.address}</td>
            <td>${value.dob}</td>
            <td align="center"><a onclick="editStudent(${index})" href="#">edit</a> / <a onclick="deleteStudent(${index})" href="#">delete</a></td>
        </tr>`
    })
    document.getElementById('tableContent').innerHTML = student;
}

function deleteStudent(key) {
    let listStudents = localStorage.getItem('FE4') ? JSON.parse(localStorage.getItem('FE4')) : [];
    if (confirm('are you sure?')) {
        listStudents.splice(key, 1)
    }
    localStorage.setItem('FE4', JSON.stringify(listStudents))
    renderStudent()
}

function editStudent(index) {
    let listStudents = localStorage.getItem('FE4') ? JSON.parse(localStorage.getItem('FE4')) : [];
    document.getElementById('name').value = listStudents[index].name
    document.getElementById('email').value = listStudents[index].email
    document.getElementById('phone').value = listStudents[index].phone
    document.getElementById('address').value = listStudents[index].address
    document.getElementById('dob').value = listStudents[index].dob
    document.getElementById('index').value = index;

    if (document.getElementById('male').value === listStudents[index].gender) {
        document.getElementById('male').checked = true
    }
    if (document.getElementById('female').value === listStudents[index].gender) {
        document.getElementById('female').checked = true
    }
    document.getElementById('changeBtn').style.display = 'block'
    document.getElementById('saveBtn').style.display = 'none'
}

function changeStudent() {
    let listStudents = localStorage.getItem('FE4') ? JSON.parse(localStorage.getItem('FE4')) : [];
    let keyNumber = document.getElementById('index').value;
    listStudents[keyNumber] = {
        gender: document.querySelector('input[name = gender]:checked').value,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        dob: document.getElementById('dob').value,
    }
    localStorage.setItem('FE4', JSON.stringify(listStudents))
    renderStudent()
    resetForm()
    document.getElementById('changeBtn').style.display = 'none'
    document.getElementById('saveBtn').style.display = 'block'
}

function pressSave(event) {
    let x = event.which
    if (x === 13) {
        if (document.getElementById('saveBtn').style.display === 'block') {
            document.getElementById('saveBtn').onclick(function () {
            })
        }
        if (document.getElementById('changeBtn').style.display === 'block') {
            document.getElementById('changeBtn').onclick(function () {
            })
        }
    }
}




















