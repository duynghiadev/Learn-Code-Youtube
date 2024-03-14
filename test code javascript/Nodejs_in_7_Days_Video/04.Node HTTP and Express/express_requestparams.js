const express = require('express')
const app = express()
const port = 8080

app.get('/books/:userId/:bookId', (req, res) => res.send(req.params))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
