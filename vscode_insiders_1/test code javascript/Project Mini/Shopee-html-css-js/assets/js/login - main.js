// Change login method 
var authBtn = document.querySelector('.auth-form .auth-form__qr-code')
var qrBtn = document.querySelector('.qr-form .qr-form__qr-code')

var authForm = document.querySelector('.auth-form')
var qrForm = document.querySelector('.qr-form')

authBtn.addEventListener('click', function() {
    authForm.style.display = 'none'
    qrForm.style.display = 'block'
})

qrBtn.addEventListener('click', function() {
    authForm.style.display = 'block'
    qrForm.style.display = 'none'
})



// Hide and appear password
var eyeIcon = document.querySelector('.auth-form__group__eye-icon')
var eyeLashIcon = document.querySelector('.auth-form__group__eyelash-icon')

var input = document.querySelector('.auth-form__group:last-child .auth-form__input')


eyeIcon.onclick = function() {
    eyeIcon.style.display = 'none'
    eyeLashIcon.style.display = 'flex'
    input.type = 'password'
}
eyeLashIcon.onclick = function() {
    eyeIcon.style.display = 'flex'
    eyeLashIcon.style.display = 'none'
    input.type = 'text'
}


// Check password
var inputName = document.querySelector('.auth-form__group:first-child input')
var inputPassword = document.querySelector('.auth-form__group:last-child input')
var notifyBox = document.querySelector('.auth-form__notification')

var loginBtn = document.querySelector('.auth-form__controls .auth-form__btn')

var Name = 'pqb26042005'
var Password = '123456@Abc'

loginBtn.onclick = function() {
    if (inputName.value == Name && inputPassword.value == Password) {
        console.log('đr')
        window.location.href = 'index - logged.html'
        notifyBox.style.display = 'none'
    } else {
        notifyBox.style.display = 'flex'
    } 
}






