/**
 * Những câu lệnh này chỉ được dùng để run trong terminal (bất kì nó ở trong thư mục nào), nhưng với một điều kiện và file đó đang start thì những câu lênh dưới chạy mới ra kết quả:
 * Ví dụ: run command --> node .\video4.2-express_hellowordjs 😆
 */
// curl http://localhost:8080 --include
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
