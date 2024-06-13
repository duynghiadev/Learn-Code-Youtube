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

# Tìm Hiểu về Yup

# Yup - Thư viện JavaScript cho Schema Validation

## Cài Đặt Yup

Để sử dụng Yup, bạn cần cài đặt nó trong dự án của mình:

```bash
npm install yup
```

## Sử Dụng Yup

### Tạo Schema Validation:

Sử dụng Yup để định nghĩa các điều kiện xác thực cho các trường dữ liệu.

```js
import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string().required('Vui lòng nhập tên'),
  age: Yup.number().positive('Tuổi phải là số dương').integer('Tuổi phải là số nguyên'),
  email: Yup.string().email('Địa chỉ email không hợp lệ').required('Vui lòng nhập email')
})
```

### Kiểm Tra Dữ Liệu:

Sử dụng phương thức `validate` hoặc `isValid` để kiểm tra dữ liệu.

```js
const data = {
  name: 'John Doe',
  age: 25,
  email: 'john@example.com'
}

schema
  .validate(data)
  .then((valid) => console.log(valid))
  .catch((error) => console.error(error))

// Hoặc sử dụng isValid để kiểm tra mà không cần thông báo lỗi chi tiết
const isValid = await schema.isValid(data)
console.log(isValid) // true hoặc false
```

### Tùy Chỉnh Thông Báo Lỗi:

Có thể tùy chỉnh thông báo lỗi cho mỗi điều kiện xác thực.

```js
const customSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Mật khẩu phải ít nhất 8 ký tự')
    .matches(/[a-zA-Z]/, 'Mật khẩu phải chứa ít nhất một ký tự')
})
```

### Ví dụ Đầy Đủ:

Dưới đây là một ví dụ sử dụng Yup trong một ứng dụng React:

```js
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const MyForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Vui lòng nhập tên'),
    email: Yup.string().email('Địa chỉ email không hợp lệ').required('Vui lòng nhập email')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Xử lý logic khi submit form
      console.log(values)
    }
  })

  return <form onSubmit={formik.handleSubmit}>{/* ... */}</form>
}

export default MyForm
```

Trong ví dụ trên, Yup được sử dụng để định nghĩa schema validation cho các trường `name` và `email`. Các phương thức của `useFormik` hook được sử dụng để quản lý trạng thái và sự kiện của form, và thông báo lỗi được hiển thị khi có lỗi xác thực.

# Formik là phải đi đôi với Yup à? hay sao?

Không, Formik không bắt buộc phải sử dụng Yup để xác thực dữ liệu. Formik và Yup là hai thư viện riêng biệt, nhưng thường được sử dụng cùng nhau trong các ứng dụng React để quản lý trạng thái và xác thực form.

## Formik

- Là một thư viện quản lý trạng thái form trong React.
- Cung cấp các giải pháp để theo dõi giá trị của các trường form, xử lý sự kiện, và quản lý trạng thái form.
- Cho phép bạn dễ dàng xử lý logic submit, reset, và các tác vụ khác liên quan đến form.

## Yup

- Là một thư viện xác thực dữ liệu để định nghĩa và kiểm tra các điều kiện xác thực.
- Cho phép bạn xác thực dữ liệu dựa trên các schema, định rõ các quy tắc xác thực cho từng trường dữ liệu.
- Thường được sử dụng để xác thực dữ liệu nhập vào form.

Khi sử dụng Formik, bạn có thể chọn sử dụng Yup hoặc bất kỳ thư viện xác thực dữ liệu nào khác tương thích với React. Formik không ép buộc sử dụng Yup, và bạn có thể sử dụng các phương tiện xác thực mà bạn ưa thích.

Ví dụ, thay vì sử dụng Yup, bạn có thể sử dụng thư viện như `prop-types` hoặc xây dựng logic xác thực tùy chỉnh trong các sự kiện của Formik nếu muốn. Tuy nhiên, Yup thường được lựa chọn nhiều vì nó cung cấp cú pháp rõ ràng và mạnh mẽ cho việc xác thực dữ liệu.
