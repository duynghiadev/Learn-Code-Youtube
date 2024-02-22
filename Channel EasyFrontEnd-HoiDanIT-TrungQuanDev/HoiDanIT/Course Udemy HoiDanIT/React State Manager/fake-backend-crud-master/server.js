const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const SERVER_PORT = 8000;
const DELAY_TIMEOUT = 0; //unit: milliseconds

server.use(middlewares)

//cors
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

//delay
server.use(function (req, res, next) { setTimeout(next, DELAY_TIMEOUT) });

server.use(router)

server.listen(SERVER_PORT, () => {
    console.log('JSON Server is running on port:', SERVER_PORT)
})