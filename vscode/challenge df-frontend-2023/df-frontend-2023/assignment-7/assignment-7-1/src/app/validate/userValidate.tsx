import * as yup from 'yup'

export const userSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Tên là bắt buộc')
    .min(4, 'Tên phải có ít nhất 4 kí tự'),
})

export const passSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
      'Phải chứa ít nhất 1 ký tự viết hoa và 1 ký tự đặc biệt',
    ),
  oldPassword: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
      'Phải chứa ít nhất 1 ký tự viết hoa và 1 ký tự đặc biệt',
    ),
})
