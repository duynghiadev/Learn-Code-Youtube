## Bài 64: Xử lý tiến trình tự động refresh token

### Chương 7: Kiến thức Authentication

Mọi người cập nhật lại một chút giúp mình.

Tại phút 13:06, mã code đúng là:

```javascript
error.response.config.headers.Authorization = `Bearer ${access_token}`
```

Tuy nhiên, lý do mình viết nhầm nhưng kết quả vẫn chính xác là sau khi gọi refresh token xong, ở trong hàm `refreshToken`, mình đã lưu access_token mới vào trong local storage. Và nhờ vào interceptor request, nó tự động gán lại cái headers.Authorization nên không gây lỗi.

Vậy câu hỏi là chúng ta có cần phải có đoạn code set lại như trên ở phút 13:06 hay không?

Không cần thiết phải set lại, vì interceptor đã tự động thực hiện việc này. Tuy nhiên, để code được chặt chẽ, tốt nhất là nên thêm đoạn mã này.

Ngoài ra, đoạn mã trả về:

```js
return this.instance(error.response.config)
```

Không được bỏ qua. Hãy giữ nó để request tiếp tục được thực hiện.

Mọi người cập nhật lại một chút ở những điểm trên giúp mình nhé.
