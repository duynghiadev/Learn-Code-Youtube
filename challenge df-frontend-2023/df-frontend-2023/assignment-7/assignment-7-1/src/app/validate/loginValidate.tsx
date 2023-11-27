import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
      'Phải chứa ít nhất 1 ký tự viết hoa và 1 ký tự đặc biệt',
    ),
})

export const signUpSchema = yup.object().shape({
  confirmPass: yup
    .string()
    .required('Vui lòng nhập lại mật khẩu!')
    .equals([yup.ref('password'), null], 'Xác nhận mật khẩu không trùng khớp'),
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  fullName: yup
    .string()
    .required('Tên là bắt buộc')
    .min(4, 'Tên phải có ít nhất 4 kí tự'),

  password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
      'Phải chứa ít nhất 1 ký tự viết hoa và 1 ký tự đặc biệt',
    ),
})
