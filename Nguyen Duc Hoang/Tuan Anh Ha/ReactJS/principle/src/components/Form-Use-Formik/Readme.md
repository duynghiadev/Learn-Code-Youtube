# Tìm Hiểu về Formik

Formik là một thư viện quản lý trạng thái và xác thực form trong ứng dụng React. Nó giúp giảm bớt công việc lặp lại và đơn giản hóa quá trình quản lý form trong ứng dụng React, đặc biệt là khi có sự tương tác phức tạp và kiểm soát xác thực.

Dưới đây là một số khái niệm cơ bản của Formik:

1. **Formik Component:**

   - `Formik` là một component chính để quản lý trạng thái và xác thực của form.
   - Nó cung cấp các props và methods để quản lý giá trị của form, xác thực, và xử lý sự kiện.

2. **Form Component:**

   - `Form` component của Formik là một wrapper cho element `<form>`, cung cấp các props và methods cho việc xử lý sự kiện submit form.

3. **Field Component:**

   - `Field` component là một cách thuận tiện để theo dõi giá trị của một trường input trong form.
   - Nó giúp tự động xác định giá trị và sự kiện onChange của trường input.

4. **formik bag:**

   - Một object chứa thông tin như giá trị của form, xác thực, và các methods để xử lý các tác vụ như submit form.

5. **Formik Props:**

   - Các props như `initialValues`, `onSubmit`, và `validationSchema` được sử dụng để cấu hình Formik.

6. **Validation:**

   - Formik hỗ trợ xác thực form thông qua sử dụng các schema validation (ví dụ: Yup schema).
   - Các thông báo lỗi có thể được hiển thị khi người dùng nhập dữ liệu không hợp lệ.

7. **Formik Helpers:**
   - Formik cung cấp các helper functions như `formik.handleChange`, `formik.handleSubmit`, và `formik.handleBlur` để giúp xử lý sự kiện và submit form.

Dưới đây là một ví dụ đơn giản về cách sử dụng Formik:

```jsx
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string().required('Bắt buộc'),
  email: Yup.string().email('Địa chỉ email không hợp lệ').required('Bắt buộc')
})

const MyForm = () => {
  const initialValues = {
    name: '',
    email: ''
  }

  const handleSubmit = (values, { setSubmitting }) => {
    // Xử lý logic khi submit form ở đây
    console.log(values)
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor='name'>Tên:</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name' component='div' />
        </div>

        <div>
          <label htmlFor='email'>Email:</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email' component='div' />
        </div>

        <div>
          <button type='submit'>Gửi</button>
        </div>
      </Form>
    </Formik>
  )
}

export default MyForm
```

Trong ví dụ trên, `Formik` component quản lý trạng thái và xác thực của form. `Field` components là các trường input trong form và được sử dụng để theo dõi giá trị và xử lý sự kiện onChange. Validation được thực hiện bằng Yup schema, và các thông báo lỗi được hiển thị thông qua `ErrorMessage` component. Khi form được submit, hàm `handleSubmit` được gọi để xử lý logic submit form.
