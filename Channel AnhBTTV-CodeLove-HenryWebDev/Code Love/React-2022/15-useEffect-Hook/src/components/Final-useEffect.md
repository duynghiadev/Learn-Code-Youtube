# Tổng kết hook useEffect

1. useEffect chỉ có 1 tham số call back function 

```js
useEffect((params)={
//  Luôn chạy sau khi component render
})
```

2. useEffect có tham số thứ 2 là mảng []

```js
useEffect((params)=>{
//  Chạy duy nhất 1 lần khi component được mounted
},[])
```

3. useEffect có tham số thứ 2 là mảng [dependencys]

```js
useEffect((params)=>{
//  Chạy 1 lần khi component được mounted + số lần khi dependency thay đổi giữa các lần render --- check cho từng dependency cách nhau dấu phẩy
},[dependency(state, props, function(){})])
```
