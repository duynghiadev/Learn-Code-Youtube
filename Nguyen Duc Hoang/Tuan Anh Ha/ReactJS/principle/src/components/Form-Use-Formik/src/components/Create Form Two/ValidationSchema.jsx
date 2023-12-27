// ValidationSchema.js
import * as Yup from 'yup'

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
})

export default ValidationSchema
