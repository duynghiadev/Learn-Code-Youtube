## jwt là gì ?

- JWT là viết tắt của JSON Web Token. Nó là một chuẩn định dạng token được sử dụng để xác thực và truyền thông tin giữa các bên trên web. JWT được thiết kế để làm cho việc xác thực đơn giản và bảo mật hơn bằng cách sử dụng các phương pháp mã hóa và chữ ký số.

- JWT bao gồm ba phần chính: Header, Payload và Signature. Header chứa thông tin về loại token và thuật toán mã hóa được sử dụng. Payload chứa các thông tin chứng thực, chẳng hạn như tên người dùng và quyền truy cập. Signature được tạo bằng cách sử dụng các thông tin trong Header và Payload, kết hợp với một khóa bí mật được chia sẻ giữa các bên để đảm bảo tính toàn vẹn của token.

- JWT được sử dụng rộng rãi trong các ứng dụng web để xác thực người dùng và truyền thông tin an toàn giữa các bên, bao gồm cả các ứng dụng di động.

## access token được tạo ra từ đâu ? Client lưu trữ token hay server ?

- Access token được tạo ra từ server và được gửi đến client để sử dụng trong các yêu cầu tương lai. Thông thường, khi người dùng đăng nhập vào một ứng dụng, server sẽ tạo ra một access token và gửi nó về cho client. Sau đó, client sẽ sử dụng token này để truy cập các tài nguyên được bảo vệ của server.

- Client sẽ lưu trữ token này để sử dụng trong các yêu cầu tiếp theo đến server. Thông thường, client sẽ lưu trữ token trong local storage hoặc cookie để sử dụng lại khi cần thiết. Tuy nhiên, việc lưu trữ token trên client có thể gây ra một số vấn đề bảo mật, như bị đánh cắp token bởi các hacker. Do đó, cần có các biện pháp bảo mật như mã hóa, chữ ký số, hoặc sử dụng các giải pháp quản lý phiên hoặc token như OAuth2 hoặc OpenID Connect để đảm bảo an toàn cho access token.

## khi tạo ra access token thì refresh token có được tạo ra cùng lúc không ?

- Có, khi tạo ra access token, refresh token cũng có thể được tạo ra cùng lúc. Refresh token thường được sử dụng để tái cấp phát access token mới sau khi access token cũ hết hạn, giúp cho người dùng không phải đăng nhập lại khi sử dụng ứng dụng.

- Ví dụ, khi người dùng đăng nhập vào một ứng dụng, server sẽ tạo ra cả access token và refresh token, gửi về cho client. Khi access token hết hạn, client sẽ sử dụng refresh token để lấy access token mới từ server. Tuy nhiên, refresh token có thời hạn lâu hơn access token, vì vậy cần được bảo mật kỹ hơn để tránh bị đánh cắp.

- Các giải pháp quản lý phiên hoặc token như OAuth2 hoặc OpenID Connect cũng cung cấp các phương thức để quản lý refresh token và đảm bảo an toàn cho hệ thống xác thực.

## refresh token được lưu trữ tại client hay server ? Và nếu lưu trữ tại client thì nó sẽ lưu trữ ở đâu ?

- Refresh token thường được lưu trữ ở phía client và được bảo mật kỹ để tránh bị đánh cắp.

- Tùy theo phương thức xác thực mà client có thể lưu trữ refresh token ở nhiều vị trí khác nhau. Nếu client là một ứng dụng web, thì refresh token có thể được lưu trữ trong cookie hoặc local storage của trình duyệt. Tuy nhiên, việc lưu trữ refresh token trong cookie có thể dễ bị tấn công bởi các kỹ thuật tấn công như cross-site scripting (XSS) hoặc cross-site request forgery (CSRF), do đó phải đảm bảo rằng các biện pháp bảo mật phù hợp được triển khai.

- Nếu client là một ứng dụng di động, refresh token có thể được lưu trữ trên thiết bị của người dùng. Điều này có thể đảm bảo tính bảo mật hơn so với việc lưu trữ trong cookie, tuy nhiên vẫn cần phải áp dụng các biện pháp bảo mật để đảm bảo an toàn dữ liệu.

- Các giải pháp xác thực và quản lý phiên như OAuth2 hoặc OpenID Connect cung cấp các hướng dẫn và các phương thức để quản lý refresh token và đảm bảo tính bảo mật của hệ thống xác thực.

## Mỗi access_token thì mình ứng với một refresh_token hay sao ?

- Thường thì mỗi access token sẽ ứng với một refresh token.

- Access token là một chuỗi mã thông báo được sử dụng để xác thực người dùng và truy cập tài nguyên. Nó có thời hạn sử dụng ngắn và thường được sử dụng để truy cập các tài nguyên bảo vệ. Khi hết hạn, người dùng sẽ cần phải làm mới access token bằng cách sử dụng một refresh token.

- Refresh token là một chuỗi mã thông báo dài hơn được sử dụng để lấy access token mới. Nó được sử dụng để duy trì phiên làm việc của người dùng mà không cần hỏi lại thông tin đăng nhập của họ. Khi access token hết hạn, refresh token sẽ được sử dụng để yêu cầu một access token mới mà không cần người dùng phải đăng nhập lại.

- Tuy nhiên, trong một số trường hợp, có thể sử dụng một access token duy nhất cho một thời gian nhất định mà không cần sử dụng refresh token. Điều này phụ thuộc vào thiết kế của hệ thống xác thực cụ thể.

## Khi access_token hết hạn, mới gửi refresh_token của access_token đó thì nó sinh ra một access_token mới, vậy nó có sinh ra một refresh_token mới không ?

- Khi sử dụng refresh_token để làm mới access_token, thì thường sẽ sinh ra một access_token mới và không sinh ra một refresh_token mới.

- Quá trình làm mới access_token và tạo mới refresh_token phụ thuộc vào thiết kế cụ thể của hệ thống xác thực. Tuy nhiên, thường thì khi làm mới access_token bằng refresh_token, thì hệ thống sẽ tạo ra một access_token mới, nhưng không tạo ra một refresh_token mới. Refresh_token ban đầu sẽ vẫn được sử dụng để làm mới access_token cho các yêu cầu tiếp theo.

## Vậy refresh_token không bao giờ thay đổi hả ?

- Không phải refresh_token không bao giờ thay đổi, tuy nhiên trong thực tế thì thường thì refresh_token sẽ được giữ nguyên cho đến khi nó hết hạn hoặc bị thu hồi.

- Khi một refresh_token hết hạn, thì người dùng sẽ phải đăng nhập lại để lấy một refresh_token mới. Ngoài ra, nếu có sự kiện an ninh xảy ra, như người dùng bị đăng xuất khỏi tài khoản của họ hoặc hệ thống phát hiện ra một hoạt động đáng ngờ, thì refresh_token của người dùng đó có thể bị thu hồi. Trong trường hợp này, người dùng sẽ phải đăng nhập lại để có được một refresh_token mới.

- Vì refresh_token được sử dụng để duy trì phiên làm việc của người dùng, nên nó cần được bảo mật và không được chia sẻ với bất kỳ ai khác. Khi refresh_token được sử dụng, các tác nhân độc hại có thể sử dụng nó để giả mạo phiên làm việc của người dùng và truy cập vào tài nguyên của họ. Vì vậy, cần phải bảo vệ refresh_token bằng cách mã hóa, giới hạn thời gian sống và thiết lập chính sách bảo mật để giảm thiểu nguy cơ bị tấn công.

## hãy giải thích cho tôi hiểu access_token và refresh_token nó giống nhau và khác nhau chỗ nào ?

- Cả access_token và refresh_token đều là các loại token được sử dụng trong quá trình xác thực và ủy quyền truy cập tài nguyên trong các hệ thống web và ứng dụng.

- Tuy nhiên, có sự khác nhau giữa hai loại token này:

+ Access_token: là một mã thông báo được sử dụng để xác thực cho các yêu cầu của người dùng đối với các tài nguyên của hệ thống. Nó được tạo ra sau khi người dùng đăng nhập thành công vào hệ thống và thường có thời gian sống ngắn hơn so với refresh_token. Access_token thường được chứa trong tiêu đề của các yêu cầu HTTP và được sử dụng để xác định danh tính và quyền truy cập của người dùng đối với các tài nguyên.

+ Refresh_token: là một mã thông báo được sử dụng để làm mới access_token khi nó hết hạn. Nó được tạo ra cùng với access_token khi người dùng đăng nhập vào hệ thống và thường có thời gian sống lâu hơn so với access_token. Khi access_token hết hạn, refresh_token được sử dụng để yêu cầu tạo ra access_token mới.

+ Tóm lại, access_token được sử dụng để xác thực cho các yêu cầu của người dùng đối với các tài nguyên của hệ thống, trong khi refresh_token được sử dụng để làm mới access_token khi nó hết hạn. Cả hai token đều cần được bảo mật và không được chia sẻ với bất kỳ ai khác để tránh nguy cơ cho các tấn công giả mạo.

## Access_token và Refresh_token lúc dùng JWT thì mình nên thên thông tin gì vào để mã hóa nhỉ ? Theo tôi thì lựa ID. Còn ý kiến của bạn là gì ?

- Khi sử dụng JWT để tạo access_token và refresh_token, thông tin cần được thêm vào để mã hóa có thể khác nhau tùy thuộc vào yêu cầu cụ thể của hệ thống.

- Tuy nhiên, việc thêm ID của người dùng là một cách phổ biến để mã hóa thông tin vào trong JWT. Bằng cách thêm ID của người dùng, hệ thống sẽ dễ dàng xác định người dùng đang sử dụng access_token hay refresh_token này. Ngoài ra, nếu hệ thống sử dụng một cơ sở dữ liệu để lưu trữ thông tin người dùng, việc thêm ID vào JWT cũng sẽ giúp cho hệ thống truy xuất dữ liệu của người dùng một cách dễ dàng hơn.

- Ngoài ID của người dùng, các thông tin khác cũng có thể được thêm vào JWT như quyền truy cập của người dùng, thời gian hết hạn của access_token hoặc refresh_token, các thông tin liên quan đến phân quyền và các thông tin khác phụ thuộc vào yêu cầu cụ thể của hệ thống. Tuy nhiên, cần lưu ý rằng các thông tin nhạy cảm như mật khẩu, thông tin tài khoản ngân hàng và thông tin cá nhân khác không nên được thêm vào JWT để tránh lộ thông tin cá nhân của người dùng.

## Trong thực tế thì người ta dùng cái gì để mã hoá JWT ?

- Trong thực tế, để mã hóa JWT, người ta thường sử dụng một thuật toán mã hóa được hỗ trợ bởi thư viện JWT mà họ đang sử dụng. Các thuật toán mã hóa thường được sử dụng bao gồm:

+ HS256, HS384, HS512: Mã hóa bằng thuật toán HMAC-SHA, trong đó các chữ ký được tạo ra bằng cách sử dụng một khóa bí mật được chia sẻ giữa hai bên trao đổi dữ liệu. Thuật toán HS256 được sử dụng phổ biến nhất.

+ RS256, RS384, RS512: Mã hóa bằng thuật toán RSA, trong đó các chữ ký được tạo ra bằng cách sử dụng một khóa công khai và một khóa bí mật. Khóa công khai được chia sẻ với bên nhận, trong khi khóa bí mật được giữ bởi bên tạo chữ ký. Thuật toán RS256 được sử dụng phổ biến nhất.

+ ES256, ES384, ES512: Mã hóa bằng thuật toán Elliptic Curve Digital Signature Algorithm (ECDSA), trong đó các chữ ký được tạo ra bằng cách sử dụng một cặp khóa công khai và bí mật được tạo ra bằng thuật toán đường cong elliptic.

- Tùy thuộc vào yêu cầu và thư viện được sử dụng, người ta có thể sử dụng một trong các thuật toán mã hóa trên hoặc sử dụng các thuật toán mã hóa khác để mã hóa JWT.

## khi nào nên sử dụng JWT trong dự án 

- JWT (JSON Web Token) là một công nghệ đang được sử dụng rộng rãi trong các dự án web để xác thực và ủy quyền truy cập. Dưới đây là một số tình huống mà sử dụng JWT trong dự án là hợp lý:

- Phân tán hệ thống: JWT có thể được sử dụng để xác thực và ủy quyền truy cập giữa các hệ thống phân tán, giúp giảm độ phức tạp và chi phí của việc tạo và quản lý phiên đăng nhập truyền thống.

- Dự án sử dụng các nền tảng khác nhau: JWT có thể được sử dụng để xác thực và ủy quyền truy cập giữa các ứng dụng được xây dựng trên các nền tảng khác nhau, giúp tăng tính tương thích và độ linh hoạt cho dự án.

- Ứng dụng di động hoặc Single-page Application (SPA): JWT là một giải pháp tốt để xác thực và ủy quyền truy cập trong các ứng dụng di động hoặc SPA, nơi việc sử dụng phiên đăng nhập truyền thống sẽ không phù hợp.

- Microservices: JWT có thể được sử dụng để xác thực và ủy quyền truy cập giữa các dịch vụ trong kiến trúc Microservices, giúp tăng tính bảo mật và giảm độ phức tạp của việc quản lý phiên đăng nhập truyền thống.

** Tuy nhiên, việc sử dụng JWT cũng cần cân nhắc kỹ lưỡng vì nó có những hạn chế như không thể thu hồi phiên đăng nhập trước khi hết hạn, dữ liệu trong JWT có thể bị hack nếu không sử dụng thuật toán mã hóa đủ mạnh. Do đó, việc sử dụng JWT trong dự án cần phải được thảo luận và xác định một cách cẩn thận. **

## khi nào nên sử dụng JWT trong dự án 

- Thời gian phản hồi nhanh: JWT có thể được sử dụng để tăng tốc độ phản hồi của hệ thống, bởi vì các thông tin xác thực và ủy quyền được chứa trong JWT có thể được giải mã mà không cần truy vấn cơ sở dữ liệu.

- Không cần lưu trạng thái phiên: JWT không yêu cầu lưu trạng thái phiên đăng nhập, do đó giúp giảm độ phức tạp của việc quản lý phiên đăng nhập truyền thống.

- Bảo mật: JWT sử dụng thuật toán mã hóa đối xứng và chữ ký số để đảm bảo tính bảo mật của thông tin xác thực và ủy quyền.

- * Tuy nhiên, khi sử dụng JWT, cần phải lưu ý rằng: *

```
+ Thông tin trong JWT có thể bị rò rỉ nếu không sử dụng thuật toán mã hóa đủ mạnh.
+ Việc cập nhật thông tin xác thực và ủy quyền có thể không được áp dụng ngay lập tức nếu sử dụng JWT với thời gian hết hạn dài.
+ Cần phải đảm bảo rằng chỉ những người được ủy quyền mới có thể truy cập các tài nguyên được bảo vệ bởi JWT.
```