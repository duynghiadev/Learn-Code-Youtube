// ValidationSchema.js
import * as Yup from 'yup'

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  age: Yup.number()
    .typeError('Age must be a number')
    .required('Age is required')
    .positive('Age must be positive')
})

export default ValidationSchema
