
const jsonServer = require('json-server')
const path = require('node:path')
const fs = require('node:fs')

const server = jsonServer.create()

// allow write operations

const filePath = path.join('server.json')
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db)


const middlewares = jsonServer.defaults({
  static: path.join(__dirname, '..', 'dist') // Servindo arquivos estáticos do diretório 'dist'
});
console.log(path.join(__dirname, "..", 'dist'))

server.use(middlewares)
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router)

server.listen(3333, () => {
  console.log('JSON Server is running')
})

module.exports = server
