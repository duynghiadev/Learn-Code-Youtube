## JWT là gì ? Làm sao để học tốt về nó

- JWT là viết tắt của JSON Web Token. Nó là một tiêu chuẩn mở (open standard) cho việc truyền thông tin an toàn giữa các bên trong một ứng dụng web hoặc mobile.

- JWT được sử dụng để xác thực người dùng (user authentication) và cấp quyền truy cập (access control) trong các ứng dụng web và mobile. JWT cung cấp một phương thức để mã hóa và giải mã thông tin trên một chuỗi dữ liệu JSON bằng cách sử dụng một khoá bí mật (secret key).

- Để học tốt về JWT, bạn có thể tham khảo các tài liệu và nguồn tài nguyên trực tuyến như sau:

+ Đọc và tìm hiểu các tài liệu chính thức về JWT trên trang web của IETF (Internet Engineering Task Force): https://tools.ietf.org/html/rfc7519.

+ Tham gia các khóa học trực tuyến hoặc các lớp học để học về JWT. Có nhiều trang web như Udemy, Coursera, edX... cung cấp các khóa học về JWT.

+ Đọc các bài viết và các hướng dẫn trên các blog và các trang web chuyên về lập trình web, bao gồm cả trang web chính thức của JWT: https://jwt.io/.

+ Thực hành với các mã ví dụ để hiểu rõ hơn về JWT. Bạn có thể tìm thấy các mã ví dụ trên các trang web học trực tuyến hoặc trên GitHub.

+ Trao đổi và thảo luận với các cộng đồng lập trình viên trên các diễn đàn trực tuyến như Stack Overflow hoặc Reddit.

## Tôi đang tìm hiểu về JWT. Làm thế nào để có thể vừa học và thực hành tốt về nó ?

- Để có thể học và thực hành tốt về JWT, bạn có thể tham khảo các bước sau:

+ Tìm hiểu cách JWT hoạt động: Để bắt đầu, bạn cần hiểu cách JWT hoạt động và các thành phần của nó, bao gồm header, payload và signature. Bạn có thể đọc tài liệu chính thức của JWT để hiểu rõ hơn về các thành phần này.

+ Tìm kiếm các mã ví dụ và các hướng dẫn: Có rất nhiều mã ví dụ và các hướng dẫn trực tuyến về JWT. Tìm kiếm và đọc các ví dụ này để hiểu cách sử dụng JWT trong thực tế.

+ Xây dựng một ứng dụng ví dụ: Sau khi đã hiểu cách JWT hoạt động và đã tìm hiểu các mã ví dụ, bạn có thể xây dựng một ứng dụng ví dụ sử dụng JWT. Thực hành xây dựng ứng dụng sẽ giúp bạn hiểu rõ hơn về cách sử dụng JWT trong thực tế.

+ Tham gia các khóa học trực tuyến: Nếu bạn muốn học sâu hơn về JWT, bạn có thể tham gia các khóa học trực tuyến. Các khóa học này cung cấp kiến thức bổ ích và các bài tập để giúp bạn thực hành.

+ Trao đổi với cộng đồng: Cuối cùng, hãy tham gia các cộng đồng lập trình viên để trao đổi và học hỏi kinh nghiệm từ các chuyên gia. Stack Overflow, Reddit và GitHub là những nơi tốt để bắt đầu.

+ Tóm lại, để học và thực hành tốt về JWT, bạn cần có sự hiểu biết cơ bản về JWT, tìm kiếm các ví dụ và các hướng dẫn, xây dựng ứng dụng ví dụ, tham gia các khóa học trực tuyến và trao đổi với cộng đồng.

## hãy cho tôi các kiến thức cơ bản về JWT

- JWT là viết tắt của JSON Web Token. Nó là một tiêu chuẩn mở (open standard) cho việc truyền thông tin an toàn giữa các bên trong một ứng dụng web hoặc mobile. JWT cung cấp một phương thức để mã hóa và giải mã thông tin trên một chuỗi dữ liệu JSON bằng cách sử dụng một khoá bí mật (secret key).

- JWT được sử dụng để xác thực người dùng (user authentication) và cấp quyền truy cập (access control) trong các ứng dụng web và mobile. Một JWT bao gồm ba phần chính: header, payload và signature.

+ Header: chứa thông tin về loại token (JWT), thuật toán mã hóa sử dụng (ví dụ: HS256) và các thông tin khác liên quan đến JWT.

+ Payload: chứa các thông tin của người dùng và các quyền truy cập. Payload có thể chứa thông tin như tên người dùng, địa chỉ email, quyền truy cập và các thông tin tùy chọn khác.

+ Signature: được sử dụng để xác thực tính hợp lệ của JWT và đảm bảo rằng không có ai có thể sửa đổi nội dung của JWT.

- Các bước để sử dụng JWT trong một ứng dụng bao gồm:

+ Xác thực người dùng bằng tên đăng nhập và mật khẩu.

+ Nếu thông tin đăng nhập hợp lệ, tạo một JWT và trả về cho người dùng.

+ Khi người dùng gửi yêu cầu đến máy chủ, máy chủ sẽ kiểm tra JWT để xác thực người dùng và xác định quyền truy cập của người dùng.

+ Nếu JWT hợp lệ, cho phép người dùng truy cập tài nguyên yêu cầu. Nếu không, từ chối yêu cầu truy cập.

- Tóm lại, JWT là một tiêu chuẩn mở để truyền thông tin an toàn giữa các bên trong một ứng dụng web hoặc mobile. Nó được sử dụng để xác thực người dùng và cấp quyền truy cập trong các ứng dụng web và mobile. JWT bao gồm ba phần chính: header, payload và signature. Các bước để sử dụng JWT trong một ứng dụng bao gồm xác thực người dùng, tạo JWT, kiểm tra JWT và cho phép truy cập tài nguyên yêu cầu.

## hãy giải thích rõ hơn về header, payload, signature. Cho tôi một vài ví dụ về nó ?

- Để hiểu rõ hơn về các phần chính của JWT, hãy xem xét một ví dụ cụ thể:

- Giả sử bạn đang xây dựng một ứng dụng web và muốn sử dụng JWT để xác thực người dùng và cấp quyền truy cập.Trong ứng dụng của bạn, bạn sử dụng một thuật toán mã hóa đối xứng (symmetric encryption) để mã hóa và giải mã các JWT.

1. Header:
- Header là một đối tượng JSON chứa các thông tin về loại token và thuật toán mã hóa sử dụng. Đối tượng này cần được mã hóa bằng base64url để tạo thành phần header của JWT. Ví dụ, trong trường hợp của bạn, header có thể như sau:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- Trong đó, "alg" là viết tắt của thuật toán sử dụng để mã hóa và giải mã JWT, và "typ" là loại token (trong trường hợp này, JWT).

2. Payload:
- Payload là phần quan trọng nhất của JWT, chứa các thông tin về người dùng và các quyền truy cập. Payload cũng là một đối tượng JSON, cần được mã hóa bằng base64url để tạo thành phần payload của JWT. Ví dụ, payload có thể như sau:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

- Trong đó, "sub" (subject) là một trường quan trọng trong JWT, chứa ID duy nhất của người dùng. Ngoài ra, bạn có thể định nghĩa các trường khác trong payload để chứa các thông tin khác về người dùng như địa chỉ email, quyền truy cập, thời gian hết hạn và các thông tin tùy chọn khác.

3. Signature:
- Signature là phần cuối cùng của JWT, được tạo bằng cách sử dụng secret key của bạn để ký (sign) header và payload. Khi máy chủ nhận được một JWT, nó sẽ sử dụng secret key để kiểm tra xem signature có hợp lệ hay không. Nếu signature không hợp lệ, JWT sẽ bị từ chối và người dùng sẽ không được phép truy cập tài nguyên yêu cầu.

- Ví dụ, signature có thể được tạo bằng cách ký header và payload bằng secret key của bạn, sử dụng thuật toán mã hóa SHA-256 như sau:

```scss
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

- Trong đó, HMACSHA256 là một hàm băm (hash function) được sử dụng để tạo ra một signature (chữ ký số) độc nhất cho mỗi JWT. Hàm băm này hoạt động bằng cách lấy hai đầu vào là secret key và dữ liệu cần băm, sau đó trả về một chuỗi hash có độ dài cố định.

- `base64UrlEncode` là một phương thức mã hóa chuỗi dữ liệu dưới dạng base64 nhưng với một số sửa đổi để phù hợp với URL. Thay vì sử dụng ký tự '+' và '/', base64UrlEncode sử dụng '-' và '_' thay thế. Ngoài ra, nếu chuỗi mã hóa có kết thúc bằng một số ký tự '=', base64UrlEncode sẽ loại bỏ chúng.

+ Ví dụ, nếu ta có chuỗi dữ liệu "Hello world", sau khi base64UrlEncode ta sẽ thu được kết quả là "SGVsbG8gd29ybGQ". Nếu ta sử dụng phương thức base64 chuẩn, ta sẽ thu được kết quả "SGVsbG8gd29ybGQ=".

- Trong trường hợp của JWT, dữ liệu cần băm là chuỗi header và payload của JWT, và secret key là một chuỗi bí mật do người tạo JWT chỉ định. Khi sử dụng HMACSHA256 để tạo ra signature, chỉ có người biết secret key mới có thể tạo ra được signature đó, và người nhận JWT sẽ sử dụng secret key cùng với dữ liệu header và payload để kiểm tra tính hợp lệ của signature.

- Việc sử dụng HMACSHA256 giúp đảm bảo tính toàn vẹn của JWT, vì nếu bất kỳ phần nào của header hoặc payload bị thay đổi, hoặc nếu ai đó cố gắng tạo ra signature với một secret key khác, signature của JWT sẽ không hợp lệ.

- Tiếp tục với ví dụ trước, chúng ta có thể kết hợp các phần header, payload và signature lại thành một JWT như sau:

```js
eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJzdWIiOiAiMTIzNDU2Nzg5MCIsICJuYW1lIjogIkpvaG4gRG9lIiwgImFkbWluIjogdHJ1ZX0.7eCmgyChIHV7tpW8LmIvg7tX4BYIvi4Dn-V8h-c55o4
```

- Trong đó, phần đầu tiên `eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9` là phần `header` được mã hóa, phần thứ hai `eyJzdWIiOiAiMTIzNDU2Nzg5MCIsICJuYW1lIjogIkpvaG4gRG9lIiwgImFkbWluIjogdHJ1ZX0` là phần `payload` được mã hóa và phần thứ ba `7eCmgyChIHV7tpW8LmIvg7tX4BYIvi4Dn-V8h-c55o4` là `signature` được tạo bằng cách ký `header` và `payload` sử dụng `secret key` của bạn.

- Khi bạn gửi JWT này đến máy chủ, máy chủ sẽ giải mã và kiểm tra tính hợp lệ của JWT bằng cách sử dụng secret key của bạn để tạo lại signature và so sánh với signature trong JWT.

- Như vậy, JWT cho phép xác thực và cấp quyền truy cập cho người dùng một cách an toàn và bảo mật. Các thông tin trong JWT được mã hóa và ký để đảm bảo tính toàn vẹn và bảo mật của dữ liệu. Tuy nhiên, cần lưu ý rằng nếu secret key bị lộ, thì ai cũng có thể giả mạo các JWT và truy cập tài nguyên của người dùng.

## Hãy cho tôi những ví dụ cơ bản về JWT và giải thích chi tiết về ứng dụng đó ?

- Dưới đây là một vài ví dụ cơ bản về việc sử dụng JWT:

+ Xác thực người dùng: Khi một người dùng đăng nhập vào một ứng dụng web hoặc di động, máy chủ có thể tạo ra một JWT và trả về cho người dùng. JWT này sẽ chứa thông tin về người dùng (ví dụ: tên đăng nhập, quyền truy cập, thời gian hết hạn) và được ký bởi máy chủ sử dụng một secret key. Khi người dùng yêu cầu truy cập đến một tài nguyên khác trên ứng dụng, họ có thể gửi lại JWT này với mỗi yêu cầu. Máy chủ sẽ kiểm tra tính hợp lệ của JWT bằng cách giải mã và kiểm tra chữ ký. Nếu JWT hợp lệ, máy chủ sẽ cho phép người dùng truy cập tài nguyên đó.

+ Truyền thông tin giữa các ứng dụng: JWT cũng có thể được sử dụng để truyền thông tin giữa các ứng dụng khác nhau. Ví dụ, một ứng dụng có thể tạo ra một JWT chứa thông tin về người dùng và gửi nó cho một ứng dụng khác để sử dụng.

+ Xác thực API: JWT cũng được sử dụng để xác thực API. Khi một ứng dụng yêu cầu truy cập đến một API, nó có thể gửi JWT của mình cùng với yêu cầu. API sẽ kiểm tra tính hợp lệ của JWT bằng cách giải mã và kiểm tra chữ ký. Nếu JWT hợp lệ, API sẽ trả về dữ liệu được yêu cầu.

- Tóm lại, JWT là một công nghệ quan trọng trong việc xác thực và cấp quyền truy cập trong các ứng dụng web và di động. Với JWT, người dùng có thể được xác thực một cách an toàn và bảo mật mà không cần phải lưu trữ thông tin xác thực trên máy chủ. Ngoài ra, JWT còn được sử dụng để truyền thông tin giữa các ứng dụng và xác thực API.

## Ví dụ về JWT sử dụng NodeJS và thư viện jsonwebtoken:

- Dưới đây là một ví dụ về việc tạo và xác thực JWT bằng Node.js và thư viện jsonwebtoken:

```js
const jwt = require('jsonwebtoken');

// Tạo JWT
const payload = { 
  username: 'john.doe', 
  role: 'admin' 
};
const secretKey = 'my-secret-key';
const options = { expiresIn: '1h' };
const token = jwt.sign(payload, secretKey, options);

console.log('Token:', token);

// Xác thực JWT
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.log('Invalid token');
  } else {
    console.log('Decoded:', decoded);
  }
});
```

- Trong ví dụ này, chúng ta sử dụng hàm jwt.sign để tạo JWT. Đầu vào của hàm này bao gồm payload (một đối tượng chứa các thông tin mà chúng ta muốn chứa trong JWT), secret key (một chuỗi bí mật để ký và giải mã JWT), và các tùy chọn khác như thời gian hết hạn của JWT.

- Sau khi tạo JWT, chúng ta sử dụng hàm jwt.verify để xác thực JWT. Đầu vào của hàm này bao gồm JWT và secret key. Nếu JWT hợp lệ, hàm sẽ trả về payload của JWT, ngược lại nó sẽ trả về lỗi.

- Lưu ý rằng trong thực tế, chúng ta thường lưu trữ secret key ở một vị trí an toàn trên máy chủ và không chia sẻ nó với bất kỳ ai khác.

## Ví dụ khác về JSON WEB TOKEN

- Dưới đây là một ví dụ về việc sử dụng JWT để xác thực người dùng trong một ứng dụng web:

```js
// Thực hiện xác thực người dùng và tạo JWT nếu thành công
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra tên đăng nhập và mật khẩu của người dùng
  if (username === 'john.doe' && password === 'password') {
    // Tạo payload chứa thông tin người dùng đã xác thực
    const payload = { 
      username: 'john.doe', 
      role: 'admin' 
    };

    // Tạo JWT sử dụng payload và secret key
    const secretKey = 'my-secret-key';
    const options = { expiresIn: '1h' };
    const token = jwt.sign(payload, secretKey, options);

    // Gửi token về cho người dùng
    res.json({ token });
  } else {
    // Trả về lỗi nếu tên đăng nhập hoặc mật khẩu không chính xác
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Bảo vệ các tài nguyên chỉ có thể truy cập khi đã xác thực
app.get('/protected-resource', (req, res) => {
  // Lấy token từ header của yêu cầu
  const token = req.headers.authorization.split(' ')[1];

  try {
    // Xác thực token sử dụng secret key
    const decoded = jwt.verify(token, 'my-secret-key');

    // Nếu token hợp lệ, cho phép truy cập vào tài nguyên bảo vệ
    res.json({ message: 'Protected resource accessed successfully' });
  } catch (err) {
    // Trả về lỗi nếu token không hợp lệ
    res.status(401).json({ message: 'Invalid token' });
  }
});
```

- Trong ví dụ này, chúng ta sử dụng JWT để xác thực người dùng và bảo vệ các tài nguyên chỉ có thể truy cập khi đã xác thực.

- Trong hàm POST /login, chúng ta kiểm tra tên đăng nhập và mật khẩu của người dùng. Nếu đăng nhập thành công, chúng ta tạo một JWT chứa thông tin người dùng đã xác thực và gửi nó về cho người dùng.

- Trong hàm GET /protected-resource, chúng ta lấy token từ header của yêu cầu và sử dụng hàm jwt.verify để xác thực token sử dụng secret key. Nếu token hợp lệ, chúng ta cho phép truy cập vào tài nguyên bảo vệ, ngược lại chúng ta trả về lỗi.

## Cho tôi một vài ví dụ cơ bản về JWT được sử dụng nhiều nhất :

- Dưới đây là một vài ví dụ về cách JWT được sử dụng trong các ứng dụng thực tế:

+ Xác thực người dùng: JWT được sử dụng để xác thực người dùng trong các ứng dụng web và di động. Sau khi người dùng đăng nhập thành công, ứng dụng sẽ gửi JWT về cho người dùng. Từ đó, người dùng có thể sử dụng JWT để truy cập các tài nguyên được bảo vệ.

+ Cung cấp dịch vụ API: JWT được sử dụng để bảo mật các dịch vụ API, đặc biệt là khi các dịch vụ đó được sử dụng bởi nhiều ứng dụng khác nhau. JWT được sử dụng để định danh và xác thực các yêu cầu của ứng dụng, đảm bảo rằng chỉ có các yêu cầu hợp lệ mới được thực thi.

+ Thực hiện đăng nhập một lần (SSO): JWT được sử dụng để thực hiện đăng nhập một lần (SSO) trong các ứng dụng có nhiều hệ thống. Khi người dùng đăng nhập vào hệ thống một lần, JWT sẽ được tạo ra để định danh người dùng. Từ đó, người dùng có thể truy cập các hệ thống khác mà không cần phải đăng nhập lại.

+ Truyền thông tin giữa các ứng dụng: JWT được sử dụng để truyền thông tin giữa các ứng dụng. Ví dụ, khi một ứng dụng cần truy cập vào các dịch vụ của ứng dụng khác, JWT có thể được sử dụng để định danh và xác thực yêu cầu của ứng dụng.

+ Lưu trữ thông tin phiên: JWT được sử dụng để lưu trữ thông tin phiên của người dùng trên các ứng dụng web. Thay vì sử dụng cookie để lưu trữ thông tin phiên, JWT có thể được sử dụng để lưu trữ thông tin phiên trên client-side, giúp tránh các vấn đề bảo mật có liên quan đến việc sử dụng cookie.

## Hãy cho tôi những ví dụ nâng cao về JWT và giải thích chi tiết về ứng dụng đó ?

- Dưới đây là một vài ví dụ nâng cao về JWT và cách sử dụng chúng trong một số ứng dụng phổ biến:

+ Xác thực người dùng trong các ứng dụng web: JWT có thể được sử dụng để xác thực người dùng khi đăng nhập vào các ứng dụng web. Sau khi người dùng đăng nhập thành công, máy chủ sẽ tạo JWT và gửi nó cho người dùng. Mỗi lần người dùng thực hiện một hoạt động trong ứng dụng, JWT sẽ được gửi kèm theo để xác thực người dùng. Nếu JWT không hợp lệ, người dùng sẽ không được phép thực hiện bất kỳ hoạt động nào trong ứng dụng.

+ Tích hợp với OAuth 2.0: OAuth 2.0 là một giao thức phổ biến được sử dụng để xác thực và ủy quyền truy cập cho các ứng dụng. JWT có thể được sử dụng như một phương tiện truyền tải thông tin xác thực giữa các bên trong quá trình xác thực OAuth 2.0.

+ Bảo vệ API: JWT cũng có thể được sử dụng để bảo vệ các API khỏi truy cập trái phép. Khi một yêu cầu API được gửi đến máy chủ, JWT sẽ được gửi kèm theo. Máy chủ sẽ kiểm tra tính hợp lệ của JWT để xác định xem yêu cầu có được phép hay không. Nếu JWT không hợp lệ, yêu cầu sẽ bị từ chối.

+ Truyền thông tin giữa các dịch vụ: JWT có thể được sử dụng để truyền thông tin giữa các dịch vụ khác nhau. Khi một dịch vụ gửi thông tin đến một dịch vụ khác, JWT có thể được tạo để chứa thông tin đó. Dịch vụ nhận thông tin sẽ kiểm tra JWT để đảm bảo tính toàn vẹn của thông tin được truyền.

- Trên đây chỉ là một vài ví dụ về cách sử dụng JWT trong các ứng dụng nâng cao. Sự linh hoạt của JWT cho phép chúng được sử dụng trong nhiều trường hợp sử dụng khác nhau, từ xác thực người dùng đơn giản đến tích hợp với các giao thức phức tạp hơn như OAuth 2.0.

## đây là một số ví dụ nâng cao khác về JWT:

+ Single Sign-On (SSO): JWT có thể được sử dụng để triển khai Single Sign-On, cho phép người dùng đăng nhập một lần và sử dụng tài khoản đó cho nhiều ứng dụng khác nhau mà không cần phải đăng nhập lại.

+ Access Token và Refresh Token: JWT có thể được sử dụng để triển khai hệ thống Access Token và Refresh Token. Access Token được sử dụng để xác định người dùng và cấp quyền truy cập cho ứng dụng, trong khi Refresh Token được sử dụng để tái cấp quyền truy cập cho người dùng mà không cần đăng nhập lại.

+ Authorization Server: JWT có thể được sử dụng để triển khai Authorization Server, là một ứng dụng quản lý quyền truy cập cho nhiều ứng dụng khác nhau. Authorization Server sẽ tạo ra Access Token dựa trên thông tin xác thực của người dùng và gửi nó cho ứng dụng yêu cầu.

+ OAuth2: JWT cũng được sử dụng trong OAuth2, một giao thức xác thực phổ biến cho phép người dùng cho phép một ứng dụng truy cập vào tài khoản của họ. JWT có thể được sử dụng để mã hóa thông tin xác thực và quyền truy cập của người dùng.

+ Microservices: JWT có thể được sử dụng trong các hệ thống Microservices để xác định và xác thực các yêu cầu truy cập giữa các dịch vụ khác nhau. Ví dụ, một microservice có thể tạo ra một JWT và chuyển nó đến một microservice khác để xác thực yêu cầu truy cập.

- Trên đây là một số ví dụ nâng cao về JWT và cách nó có thể được áp dụng trong thực tế.

## hãy viết cho tôi đoạn code minh hoạ về sử dụng JWT nâng cao, sử dụng Nodejs ?

- Dưới đây là một đoạn code minh họa cho việc sử dụng JWT nâng cao trong Node.js:

```js
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Load private and public keys
const private_key = fs.readFileSync('./private.key');
const public_key = fs.readFileSync('./public.key');

// Define payload
const payload = {
  user_id: 12345,
  email: 'john.doe@example.com',
  role: 'admin'
};

// Sign token with private key
const token = jwt.sign(payload, private_key, { algorithm: 'RS256' });

// Verify token with public key
jwt.verify(token, public_key, { algorithms: ['RS256'] }, (err, decoded) => {
  if (err) {
    console.error(err);
  } else {
    console.log(decoded);
    // Output: { user_id: 12345, email: 'john.doe@example.com', role: 'admin', iat: 1659615101 }
  }
});
```

- Trong đoạn mã trên, chúng ta đầu tiên tải khóa riêng tư và khóa công khai từ hai tệp `private.key` và `public.key`. Sau đó, chúng ta định nghĩa `payload` của JWT, bao gồm các thông tin như `user_id`, `email` và `role`.

- Chúng ta sử dụng phương thức `jwt.sign()` để ký token bằng khóa riêng tư. Chúng ta chỉ định thuật toán `RS256` (RSA-SHA256) để sử dụng khi ký token.

- Sau đó, chúng ta sử dụng phương thức `jwt.verify()` để xác thực token bằng khóa công khai. Chúng ta chỉ định lại thuật toán RS256 để sử dụng khi xác thực token.

- Nếu token được xác thực thành công, nó sẽ được giải mã và các thông tin trong payload sẽ được trả về trong đối tượng `decoded`.

## hãy viết cho tôi đoạn code minh hoạ về sử dụng JWT nâng cao, sử dụng Nodejs

- Dưới đây là một ví dụ về sử dụng JWT nâng cao trong Node.js, bao gồm các chức năng tạo token, xác thực token và sử dụng middleware để kiểm tra quyền truy cập:

```js
const jwt = require('jsonwebtoken');

// Tạo token
const createToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
};

// Xác thực token
const verifyToken = (token, secret) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};

// Middleware kiểm tra quyền truy cập
const checkAccess = (requiredAccess) => {
  return async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const decoded = await verifyToken(token, process.env.JWT_SECRET);
      const hasAccess = decoded.access.includes(requiredAccess);
      if (!hasAccess) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      req.user = decoded;
      next();
    } catch (err) {
      console.error(err);
      return res.status(401).json({ error: 'Unauthorized' });
    }
  };
};

// Sử dụng middleware kiểm tra quyền truy cập
app.get('/secret', checkAccess('admin'), (req, res) => {
  res.json({ message: `Welcome ${req.user.username} to the admin area` });
});
```

- Trong ví dụ này, chúng ta sử dụng package `jsonwebtoken` để tạo và xác thực JWT. Chúng ta có các hàm `createToken` để tạo token, `verifyToken` để xác thực token và trả về dữ liệu giải mã và `checkAccess` để kiểm tra quyền truy cập.

- Để sử dụng `middleware` kiểm tra quyền truy cập, chúng ta đưa `checkAccess` vào đường dẫn cần bảo vệ và truyền vào tham số là quyền truy cập yêu cầu (`'admin'` trong trường hợp này). Nếu người dùng không có quyền truy cập, middleware sẽ trả về lỗi 403 `Forbidden`. Nếu token không hợp lệ hoặc thiếu, middleware sẽ trả về lỗi `401 Unauthorized`. Nếu token hợp lệ và người dùng có quyền truy cập, middleware sẽ tiếp tục xử lý yêu cầu và gắn dữ liệu giải mã vào đối tượng `req.user` để có thể sử dụng trong các xử lý tiếp theo.