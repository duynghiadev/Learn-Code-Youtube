const buttonLogin = document.querySelector('.btn-login');
const inputSelectorAll = document.querySelectorAll('.form-group .form-control');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const emailSelector = document.querySelector('.email');
const passwordSelector = document.querySelector('.password');
const alertSelector = document.querySelector('.alert-danger');


// valiadte email
function ValidateEmail(valueInput) {
    let message = null;
    if(valueInput === '') {
        message = 'Email không được để trống';
    } else if(emailRegex.test(valueInput) === false) {
        message = 'Email không đúng định dạng';
    }
    return message;
}

// valiadte password
function ValidatePassword(valueInput) {
    let message = null;
    if(valueInput === '') {
        message = 'Password không được để trống';
    } else if(valueInput.length < 8) {
        message = 'Mật khẩu phải có ít nhất 8 kí tự';
    } else if(passwordRegex.test(valueInput) === false) {
        message = 'Mật khẩu phải có ít nhất 1 kí tự hoa, thường, đặc biệt, số';
    }
    return message;
}


// 2. Nơi khai báo hàm
function handleLogin(event) {
    let message;
    let errorMesage = [];
    // Ngăn chặn form submit
    event.preventDefault();
    for(let i = 0; i < inputSelectorAll.length; i++) {
        
        let nameInput = inputSelectorAll[i].getAttribute('name');
        let valueInput = inputSelectorAll[i].value.trim();
        // Nếu input là email thì chúng ta thực hiện validate email
        if(nameInput === 'email') {
            message = ValidateEmail(valueInput);
        } else {
            message = ValidatePassword(valueInput);
        }

        let errorMessageSelector = inputSelectorAll[i].closest('.form-group').querySelector('.error_message');
        // Hiển thị lỗi cho người dùng
        if(message === null) {
            inputSelectorAll[i].classList.remove('error');
            errorMessageSelector.innerText = '';
            inputSelectorAll[i].classList.add('success');
        } else {
            // 1. cho ô input validate có mầu đỏ
            inputSelectorAll[i].classList.add('error');
            // 2. Hiển thị lỗi message ở div dưới ô input
            errorMessageSelector.innerText = message;
            errorMesage.push(message);
        }
       
    }

    // không có bất kì lỗi nào thì submit form
    if(errorMesage.length === 0) {
        // 1. get all data user from localStorage
        let users = JSON.parse(localStorage.getItem('users'));
        // 2. so sánh email và password nhập từ form với thông tin trong localStorage
        let isLoginExitIndex = -1;
        for(let i = 0; i < users.length; i++) {
            if(users[i].email === emailSelector.value 
                && users[i].password === passwordSelector.value
            ) {
                isLoginExitIndex = i;
                break;
            }
        }
        // 3. Thực hiện vào trang home hoặc hiện lỗi sai email và pass
        if(isLoginExitIndex !== -1) {
            users.forEach(function(item) {
                item.status = '';
            }); 
            // cập nhật status -> active
            users[isLoginExitIndex].status = 'active';
            // set to localStorage
            localStorage.setItem('users', JSON.stringify(users));
            // chuyển sang trang home
            if(users[isLoginExitIndex].role === 'admin') {
                window.location.href = '/my-account.html';
            } else {
                window.location.href = '/index.html';
            }
            
        } else {
            // Hiển thị lỗi ở trên form
            alertSelector.innerText = 'Email hoặc password không đúng';
            alertSelector.classList.remove('hide');
        }
        
    }

}









// 3. Nơi lưu trữ eventlistener và chạy hàm khởi tạo
buttonLogin.addEventListener('click', handleLogin);