## Trong bài này chúng ta học về async await

- Nối tiếp bài trước thì trong bài này chúng ta custom lại code bài trước đó là chuyển code
	`promise` thành `async await`

- Thì bản chất khi biên dịch code (compile code) thì `async await` cũng chuyển thành kiểu
	`promise`. Nên mọi người cố gắng hiểu vấn đề cốt lõi nhé.

- Khi sử dụng promise thì khi bắt lỗi thì chúng ta sử dụng `.catch()`. Còn trong async await thì
	chúng ta sử dụng `catch()` để bắt lỗi 
