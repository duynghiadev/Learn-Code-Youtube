API.callWithToken().get('/auth/me')
  .then((res) => {
    // todo
  })
  .catch((err) => {
    window.location.href = 'index.html';
  });

const elAuthForm = document.getElementById('auth-form');
const elPasswordCurrent = document.getElementById('password_current');
const elPassword = document.getElementById('password');
const elPasswordConfirmation = document.getElementById('password_confirmation');
const elFormMessage = document.getElementById('formMessage');

elAuthForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(elAuthForm);
  const data = Object.fromEntries(formData);

  API.callWithToken().put('/auth/change-password', data)
    .then((res) => {
      elPasswordCurrent.value = '';
      elPassword.value = '';
      elPasswordConfirmation.value = '';

      elFormMessage.innerHTML = /* html */ `
      <div class="alert alert-success" role="alert">
        Thay đổi mật khẩu thành công!
      </div>`;
    })
    .catch((err) => {
      const errors = err.response.data.errors;
      showFormErrorsMessage(errors, elFormMessage);
    });
});
