import * as yup from 'yup'

export const createBookSchema = yup.object().shape({
  author: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Tên tác giả chỉ chứa chữ cái và khoảng trắng')
    .required('Tên tác giả là bắt buộc'),
  name: yup
    .string()
    .min(5, 'Tên sách phải có ít nhất 5 ký tự')
    .required('Tên sách là bắt buộc'),
  topic: yup
    .number()
    .moreThan(0, 'Hãy chọn 1 chủ đề')
    .required('Chủ đề sách là bắt buộc'),
})
