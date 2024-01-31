// 1. Nơi để các biến lưu trữ (querySelector...)
const buttonRegister = document.querySelector('.btn-signup');
const nameSelector = document.querySelector('.name');
const emailSelector = document.querySelector('.email');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordSelector = document.querySelector('.password');
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const confirmPasswordSelector = document.querySelector('.confirm_password');
const tooglePass = document.querySelector('.toogle_password');

function showError(input, message) {
    // thay đổi border input
    input.classList.remove('success');
    input.classList.add('error');
    let messageInput = input.nextElementSibling;
    // Hiển thị message lỗi
    messageInput.innerText = message;

    // thêm class error cho parent
    input.closest('.form-group').classList.add('form-group_error');
}

function showSuccess(input) {
    // thay đổi border input
    input.classList.remove('error');
    input.classList.add('success');
    let messageInput = input.nextElementSibling;
    // Xóa message lỗi
    messageInput.innerText = '';

    // xóa class error cho parent
    input.closest('.form-group').classList.remove('form-group_error');
}

// 2. Nơi khai báo các hàm lắng nghe sự kiện hoặc hàm chạy lần đầu load trang
function handleSignUp(event) {
    event.preventDefault();
    // Validate name
    let isNameValid = validateName();
    // Validate email
    let isEmailValid = validateEmail();
    // validate password
    let isPasswordValid = validatePassword();
    // Validate confirm password
    let isConfirmPassValid = validateConfirmPassword();

    // Khi tất cả validate hợp lệ, chúng ta thực hiện lưu trữ data
    if(isNameValid && isEmailValid && isPasswordValid && isConfirmPassValid) {
        // 1. Trước khi push vào phải lấy thông tin ra
        let usersBefore;
        if(localStorage.getItem('users') === null) {
            usersBefore = [];
        } 
        // khi có data local chạy vào đây
        else {
            usersBefore = JSON.parse(localStorage.getItem('users'));
        }

        // 2. kiểm tra email không trùng mới đưa vào localStorage
        let isEmailUnique = true;
        for(let i = 0; i < usersBefore.length; i++) {
            if(usersBefore[i].email === emailSelector.value){
                isEmailUnique = false;
                break;
            }
        }

        // Nếu isEmailUnique = true nghĩa là chưa có email trong hệ thống
        if(isEmailUnique) {
            let objNewUser = {
                id: crypto.randomUUID(),
                name: nameSelector.value,
                email: emailSelector.value,
                password: passwordSelector.value,
                status: '',
                role: 'regular'
            }

            // thêm user vào mảng đã có sẵn
            usersBefore.push(objNewUser);
            // save information to local storage
            localStorage.setItem('users', JSON.stringify(usersBefore));
            // chuyển sang trang login
            window.location.href = '/login.html';
        } else {
            alert('Email thêm vào hệ thống đã tồn tại, xin thử login');
        }
        
    }
    
}

// hàm này xử lí show hide password
function handleTooglePasss(event) {
    let typePass = passwordSelector.getAttribute('type');
    let clicked = event.target;
    if(typePass === 'password') {
        passwordSelector.setAttribute('type', 'text');
        clicked.classList.remove('fa-eye-slash');
        clicked.classList.add('fa-eye');
    } else {
        passwordSelector.setAttribute('type', 'password');
        clicked.classList.add('fa-eye-slash');
        clicked.classList.remove('fa-eye');
    }
   
}

function validateName() {
    let isValidate = false;
    let valueName = nameSelector.value.trim();
    // Validate name
    if(valueName === '') {
        showError(nameSelector, 'Tên không được để trống');
    } else {
        isValidate = true;
        showSuccess(nameSelector);
    }
    // Thông báo name có validate thành công hay không?
    return isValidate;
}

function validateEmail() {
    let isValidate = false;
    let valueEmail = emailSelector.value.trim();
    // Validate email
    if(valueEmail === '') {
        showError(emailSelector, 'Email không được để trống');
    } else if(emailRegex.test(valueEmail) === false) {
        showError(emailSelector, 'Email không đúng định dạng');
    } else {
        isValidate = true;
        showSuccess(emailSelector);
    }
    return isValidate;
}

function validatePassword() {
    let isValidate = false;
    let passwordValue = passwordSelector.value.trim();
    // validate password
    if(passwordValue === '') {
        showError(passwordSelector, 'Password không được để trống');
    } else if(passwordValue.length < 8) {
        showError(passwordSelector, 'Mật khẩu phải có ít nhất 8 kí tự');
    } else if(passwordRegex.test(passwordValue) === false) {
        showError(passwordSelector, 'Mật khẩu phải có ít nhất 1 kí tự hoa, thường, đặc biệt, số');
    } else {
        isValidate = true;
        showSuccess(passwordSelector);
    }
    return isValidate;
}

function validateConfirmPassword() {
    let isValidate = false;
    let confirmPassValue = confirmPasswordSelector.value.trim();
    let passwordValue = passwordSelector.value.trim();
    // Validate confirm password
    if(confirmPassValue === '') {
        showError(confirmPasswordSelector, 'Confirm password không được trống');
    } else if(confirmPassValue.length < 8) {
        showError(confirmPasswordSelector, 'Xác nhận mật khẩu phải có ít nhất 8 kí tự');
    } else if(passwordRegex.test(confirmPassValue) === false) {
        showError(confirmPasswordSelector, 'Xác nhận mật khẩu phải có ít nhất 1 kí tự hoa, thường, đặc biệt, số');
    } else if(confirmPassValue !== passwordValue) {
        showError(confirmPasswordSelector, 'Xác nhận mật khẩu không trùng mật khẩu');
    } else {
        isValidate = true;
        showSuccess(confirmPasswordSelector);
    }
    return isValidate;
}


// 3. Nơi chạy hàm hoặc thêm addEventLisner
// Khi nhấn vào button register
buttonRegister.addEventListener('click', handleSignUp);
// Khi nhấn vào icon show hide password
tooglePass.addEventListener('click', handleTooglePasss);

// Bắt sự kiện keyup cho ô input name
nameSelector.addEventListener('keyup', validateName);
emailSelector.addEventListener('keyup', validateEmail);
passwordSelector.addEventListener('keyup', validatePassword);
confirmPasswordSelector.addEventListener('keyup', validateConfirmPassword)
