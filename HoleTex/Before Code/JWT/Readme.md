## JWT (JSON WEB TOKEN)

## Hướng dẫn Run Code:

- Run dòng này bằng cách nhấn vào chữ Send Request [`POST http://localhost:5500/login`]
- Sau đó hiện ra 2 cái Token đó là accessToken và refreshToken
  - Chúng ta nhập accessToken vào chỗ Authorization trong đường dẫn [`GET http://localhost:5000/books`]
  - Token còn lại nhập vào chỗ refreshToken trong đường dẫn [`POST http://localhost:5500/refreshToken`]
