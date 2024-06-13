# Đây là khoá học JSON Web Token

[Link Course](https://bom.so/HHpnPs)

- Bài này chia sẻ với các bạn về kiến thức NodeJS, Express, MongoDB gồm các nội dung sau

- Cài đặt và tạo dự án NodeJS trên Windows 11
- Cài đặt và tạo dự án NodeJS trên MacOS Ventura
- Tạo project mới trong NodeJS
- Hàm và module trong Javascript
- Làm việc với thư viện ExpressJS
- Biến môi trường với file .env
- Xử lý Request/Response trong Express
- Sử dụng nodemon để không phải chạy lại code mỗi lần thay đổi
- Tùy biến Router trong Express
- Test các Request với Postman
- Debug các request và kiểm tra các tham số truyền đến NodeJS App
- Viết request Login, gửi tham số qua Request Body
- Validate các thông tin đầu vào với Express Validator
- Controllers và cách tổ chức Controllers trong dự án NodeJS
- Trả về dữ liệu dạng JSON kèm HTTP Status Code
- Tổ chức các Repositories để lấy dữ liệu dưới Database
- Sử dụng Event Emitter trong Nodejs
- MongoDB và kết nối với NodeJS
- Xử lý error và tạo class Exception riêng
- Giới thiệu về ORM, Model và validate Model trong Mongoose
- Viết request đăng ký người dùng - Register
- Mã hóa mật khẩu với bcrypt
- Xây dựng Request đăng nhập User, lưu dữ liệu vào MongoDb
- Giới thiệu về JWT - Json Web Token
- Cài đặt Json Web Token và tích hợp vào dự án Nodejs
- Thêm Authentication Middleware có JWT
- Thêm JWT vào header, validate JWT cho các Request
- Hoàn thiện chức năng insert Student
- Sử dụng thư viện Faker để seeding data
- Chức năng Paging(phân trang), kèm Filter(lọc) danh sách sinh viên dài
- Chức năng lấy thông tin chi tiết 1 Student
- Chức năng cập nhật thông tin student

## Một vài câu hỏi thắc mắc

1. Nhưng em có một thắc mắc là việc generateToken của thằng jwt nó rất dài, vậy chúng ta có cách nào rút gọn cái token lại không ạ ?

- Các chuỗi token JWT được mã hóa bằng một thuật toán đối xứng, và nếu chúng ta rút gọn chuỗi token, người khác có thể dễ dàng giải mã và truy cập thông tin trong token. Việc này có thể gây ra lỗ hổng bảo mật và xâm nhập vào hệ thống.

- Thay vì rút gọn chuỗi token JWT, chúng ta nên tìm cách giảm thiểu kích thước thông tin trong token bằng cách:

- Chỉ chứa các thông tin cần thiết: Token JWT nên chỉ chứa các thông tin quan trọng như ID người dùng, quyền truy cập, hạn chế thời gian, vv. Tránh chứa thông tin nhạy cảm và không cần thiết trong token.

- Sử dụng thuật toán mã hóa hiệu quả: Chọn thuật toán mã hóa JWT phù hợp và tối ưu để giảm kích thước chuỗi mã thông báo.

- Sử dụng thuật toán nén dữ liệu: Nếu có khả năng, chúng ta có thể sử dụng thuật toán nén dữ liệu để giảm kích thước chuỗi token. Tuy nhiên, việc này cần được hỗ trợ và đồng thuận từ cả phía server và client.

- Tối ưu hóa kích thước gói tin: Chúng ta có thể tối ưu hóa kích thước gói tin bằng cách sử dụng mã thông báo JWT chỉ trong các yêu cầu cần thiết và tránh việc gửi token qua các yêu cầu không cần thiết.

2. Em thấy bảo NestJS oke hơn NodeJS đúng không ạ. Em đang muốn bỏ qua NodeJS để học luôn NestJS luôn. Mong thầy cho em ý kiến ạ

- Nestjs nó kèm cả express luôn, hỗ trợ typescript, có module,services và cli để generate tiện lắm, trên kênh của a cũng có luôn em nhé
