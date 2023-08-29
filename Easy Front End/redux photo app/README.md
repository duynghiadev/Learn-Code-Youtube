# Mini Project: Photo App

[Học Redux cở bản 2020](https://tinyurl.com/2zpob73a)

# Mục tiêu

Xây dựng một project mini đơn giản để ứng dụng kiến thức phần Redux vào project ReactJS.

- Đơn giản, không quá phức tạp
- Tập trung nhiều vào `Redux` với `Redux Toolkit`
- Sử dụng toàn bộ là `hooks`
- Học sử dụng UI library: `Reactstrap`
- Học cách sử dụng form: `Formik`
- Học cách tổ chức API (optional)

## Project này build cái gì ?

`PHOTO APP`

- App đơn giản để quản lý hình ảnh yêu thích, được chọn lựa từ https://picsum.photos/
- CRUD operators
- Gồm có 2 trang:
  - `Home`: listing + view + delete
  - `AddEdit`: dùng để tạo mới + sửa thông tin của một photo
- Mỗi photo gồm: `title` + `categoryId` + `imageUrl`
- Các chức năng:
  - Render danh sách photo yêu thích
  - Lọc photo theo category
  - Thêm mới một photo
  - Chỉnh sửa một photo
  - Remove một photo
  - Persist dữ liệu khi reload browser
  - Random photo ngẫu nhiên từ https://picsum.photos/
  - Hiển thị danh sách photo https://picsum.photos/ để lựa chọn

## Công nghệ sử dụng trong project này

- ReactJS (CRA)
- Redux (`Redux Toolkit`)
- Form management: `Formik`
- Routings: `React Router`
- UI lib: `Reactstrap`
- Redux-Persist

## Bạn sẽ học được gì từ project này

- Tổ chức `folder`, `files` trong thực tế
- Sử dụng Redux tốt hơn với `Redux Toolkit`
- Biết cách tạo các custom field trong `Formik`
- Thiết kế `routing` trong ReactJS App
- Sử dụng một thư viện UI bên ngoài để làm UI cho lẹ

## Dự kiến khi nào bắt đầu và bao lâu ?

- Ngay trong tuần này
- Kéo dài: 10-15 videos
- Sẽ có buổi live cuối để demo chém gió thành quả sau cùng

Good luck for all of us! 💖

### 1. Setup ReactJS App via Create React App

> Link: https://create-react-app.dev/docs/getting-started/

### 2. Add SCSS support

```js
npm i --save-dev node-sass
```

### 3. Add react router

```
npm i --save react-router-dom
```

### 4. Add UI lib

```
npm i --save reactstrap
```

## Tổ chức folder

```
src
|__ assets
|  |__ images
|  |__ styles (global styles)
|
|__ components (shared components)
|
|__ features
  |__ Photo
    |__ components
    |  |__ PhotoList
    |  |__ PhotoCard
    |  |__ PhotoForm
    |
    |__ pages
    |  |__ MainPage
    |  |__ AddEditPage
    |__ photoSlice.js
    |__ index.js
```

## Tổ chức routing

- Sử dụng kĩ thuật lazy load components.
- Load theo features.

```js
// App.js
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/photos" component={Photo} />
        <Route path="/user" component={User} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
```

## Custom Field

- Cầu nối giữa UI control và Formik.
- UI control là một controlled component với props:
  - name: tên xác định control
  - value: giá trị của control
  - onChange: trigger hàm này với giá trị mới khi có thay đổi
  - onBlur: xác định khi nào thì control này bị touched

```js
function InputField(props) {
  const { field, type, label, placeholder, disabled } = props;
  const { name } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}
```

## Random Photo control

RandomPhoto
Props

- name
- imageUrl
- onImageUrlChange
- onRandomButtonBlur

RandomPhotoField

Formik

Yup
