# Các lưu ý khi sử dụng các hook trong ReactJS

1. Hook chỉ dùng được trong function component. Còn trong class component thì không thể sử dụng hook
   được

2. Không thể sử dụng hook trong các block code như: `if else`, `for`, `switch case`,...

```js
if (true) {
  const [value, setValue] = useState()
}
```

3. Hook `useEffect` nó thực hiện theo thứ tự từ trên xuống dưới

```jsx
useEffect(() => {
  console.log('Hello')
}, [])

useEffect(() => {
  console.log('Goodbye')
}, [])
```
