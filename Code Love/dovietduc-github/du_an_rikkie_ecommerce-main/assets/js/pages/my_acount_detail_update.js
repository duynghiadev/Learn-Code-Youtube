const acountDetailButtonSaveSelector = document.querySelector('.btn_acount_detail');
const acountDetailDNameSelector = document.querySelector('input[name="dname"]');
const acountDetailEmailSelector = document.querySelector('.form_update_acount input[name="email"]');
const acountDetailPasswordSelector = document.querySelector('.form_update_acount input[name="password"]');
const acountDetailNpassdSelector = document.querySelector('.form_update_acount input[name="npassword"]');
const acountDetailCpasswordSelector = document.querySelector('.form_update_acount input[name="cpassword"]');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;






// 2. khai báo hàm
// hàm update thông tin acount
function handleUpdateAcountDetail(event){
    event.preventDefault();
    let isFormValid = true;

    let valueName = acountDetailDNameSelector.value.trim();
    let valueEmail = acountDetailEmailSelector.value.trim();
    // 1. validate name
    let nextErrName = acountDetailDNameSelector.nextElementSibling;
    let nextErrEmail = acountDetailEmailSelector.nextElementSibling;
    if(valueName === '') {
        acountDetailDNameSelector.classList.add('error');
        nextErrName.innerText = 'Name không được để trống';
        isFormValid = false;
    } else {
        acountDetailDNameSelector.classList.remove('error');
        nextErrName.innerText = '';
    }

    // validate email
    if(valueEmail === '') {
        acountDetailEmailSelector.classList.add('error');
        nextErrEmail.innerText = 'Email không được để trống';
        isFormValid = false;
    } else if(emailRegex.test(valueEmail) === false) {
        isFormValid = false;
        nextErrEmail.innerText = 'Email không đúng định dạng';
    } else {
        acountDetailEmailSelector.classList.remove('error');
        nextErrEmail.innerText = '';
    }
    
   

    // validate pass
    let isPassValid = validatePass(acountDetailPasswordSelector, 'Password');
    // new pasword
    let isvalidateNewPassValid = validatePass(acountDetailNpassdSelector, 'New password');
    // confirm pass
    let isPassConfirmValid = validatePassConfirm(acountDetailCpasswordSelector, acountDetailNpassdSelector, 'Confirm password');
    // 2. Kiểm tra validate thành công hay chưa? hay form hợp lệ
    if(isFormValid && isPassValid && isvalidateNewPassValid && isPassConfirmValid) {
        handleUpdateAcountDetailValid();
    }

}

function validatePassConfirm(inputSelector, inputSelectorCompare, messageFieldHead) {
    let nextError = inputSelector.nextElementSibling;
    let valueCurrPass = inputSelector.value;
    let valueCompare = inputSelectorCompare.value;
    let isFormValid = false;
    if(valueCurrPass === '') {
        inputSelector.classList.add('error');
        nextError.innerText = `${messageFieldHead} không được để trống`;
    } else if(valueCurrPass.length < 8) {
        inputSelector.classList.add('error');
        nextError.innerText = `${messageFieldHead} phải có ít nhất 8 kí tự`;
    } else if(passwordRegex.test(valueCurrPass) === false) {
        inputSelector.classList.add('error');
        nextError.innerText = `${messageFieldHead} phải có ít nhất 1 kí tự hoa, thường, đặc biệt, số`;
    } else if(valueCurrPass !== valueCompare) {
        inputSelector.classList.add('error');
        nextError.innerText = `${messageFieldHead} không trùng pasword`;
    } else {
        isFormValid = true;
        inputSelector.classList.remove('error');
        nextError.innerText = '';
    }
    return isFormValid;
}

function validatePass(inputSelector, messageFieldHead) {
    let nextError = inputSelector.nextElementSibling;
    let valueCurrPass = inputSelector.value;
    let isFormValid = false;
    if(valueCurrPass === '') {
        inputSelector.classList.add('error');
        nextError.innerText = `${messageFieldHead} không được để trống`;
    } else if(valueCurrPass.length < 8) {
        inputSelector.classList.add('error');
        nextError.innerText = `${messageFieldHead} phải có ít nhất 8 kí tự`;
    } else if(passwordRegex.test(valueCurrPass) === false) {
        inputSelector.classList.add('error');
        nextError.innerText = `${messageFieldHead} phải có ít nhất 1 kí tự hoa, thường, đặc biệt, số`;
    } else {
        isFormValid = true;
        inputSelector.classList.remove('error');
        nextError.innerText = '';
    }
    return isFormValid;
}

function handleUpdateAcountDetailValid() {
    // 1. Kiểm tra password người dùng nhập có trùng với password user đang login hay không?
    let valueName = acountDetailDNameSelector.value.trim();
    let valueEmail = acountDetailEmailSelector.value.trim();
    let valueCurrPass = acountDetailPasswordSelector.value.trim();
    let valueNewPass = acountDetailNpassdSelector.value.trim();

    // dùng find để tìm user object thỏa mãn điều kiện
    let users = JSON.parse(localStorage.getItem('users'));
    let userIsLogin = users.find((item) => item.status === 'active');
    // khi giá trị password nhập vào đúng với user đang login
    if(userIsLogin && userIsLogin.password === valueCurrPass) {
        let userUpdateInfor = users.map(
            function(item) {
                if(item.status === 'active') {
                    return {
                        id: item.id,
                        name: valueName,
                        password: valueNewPass,
                        email: valueEmail,
                        status: 'active'
                    }
                } else {
                    return item;
                }
            }
        );

        // set lại thông tin vào localStorge
        localStorage.setItem('users', JSON.stringify(userUpdateInfor));
    }

}

function showNameAndEmail() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userLogin = users.find(item => item.status === 'active');
    // add infor to input
    if(userLogin) {
        acountDetailDNameSelector.value = userLogin.name;
        acountDetailEmailSelector.value = userLogin.email;
        acountDetailEmailSelector.disabled = true;
    } else {
        window.location.href = '/login.html';
    }
    
}



// 3. add event
acountDetailButtonSaveSelector.addEventListener('click', handleUpdateAcountDetail);
// khi load trang điền thông tin name và email
showNameAndEmail();