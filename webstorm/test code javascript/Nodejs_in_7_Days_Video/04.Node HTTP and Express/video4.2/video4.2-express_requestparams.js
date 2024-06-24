/**
 * Những câu lệnh này chỉ được dùng để run trong terminal (bất kì nó ở trong thư mục nào), nhưng với một điều kiện và file đó đang start thì những câu lênh dưới chạy mới ra kết quả:
 * Ví dụ: run command --> node .\video4.2-express_requestparams.js 😆
 *
 * Sau đó run chạy:
 * curl -X GET http://localhost:8080/books/abcd/efgh --include ✅
 *
 * - chú ý tham số abcd, và efgh --> có thể thay thế bằng cái khác cũng được 📌
 */
const express = require('express')
const app = express()
const port = 8080

app.get('/books/:userId/:bookId', (req, res) => res.send(req.params))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
