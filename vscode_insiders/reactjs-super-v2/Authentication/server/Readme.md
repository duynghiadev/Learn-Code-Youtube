# Bài 62: Kỹ thuật viết script tự động hóa Postman

Test cho login

```js
pm.test('Login thành công', function () {
  pm.response.to.have.status(200)
  const responseJson = pm.response.json()
  pm.environment.set('access_token', responseJson.data.access_token)
  pm.environment.set('refresh_token', responseJson.data.refresh_token)
})
```

Test cho refresh token

```js
pm.test('Set thành công access_token', function () {
  pm.response.to.have.status(200)
  const responseJson = pm.response.json()
  pm.environment.set('access_token', responseJson.data.access_token)
})
```

Test cho get profile

```js
pm.test('Lấy profile thành công', function () {
  pm.response.to.have.status(200)
})
```

Test cho get products

```js
pm.test('Lấy products thành công', function () {
  pm.response.to.have.status(200)
})
```
