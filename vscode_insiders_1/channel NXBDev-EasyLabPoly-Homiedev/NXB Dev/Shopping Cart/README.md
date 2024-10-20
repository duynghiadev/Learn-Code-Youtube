# Nội dung bài học này

- Video này sẽ hướng dẫn anh em JS dev cách tạo một giỏ hàng mua sắm đa dạng và linh hoạt bằng cách sử dụng hai công nghệ mạnh mẽ: ReactJS và TypeScript. Bạn sẽ biết cách xây dựng một chức năng Shopping Cart hoàn chỉnh cho phép thêm sản phẩm vào giỏ hàng và quản lý nó một cách dễ dàng và hiệu quả. Đây là cơ hội tốt để nắm vững việc sử dụng ReactJS và TypeScript trong phát triển ứng dụng thực tế.

- Ngoài ra Context API cũng được áp dụng cho phần quản lý global state cho ứng dụng.

[Link tutorial](https://bom.so/EyluIq)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
