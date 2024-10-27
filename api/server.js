const jsonServer = require('json-server')
const path = require('node:path')

const server = jsonServer.create()
const router = jsonServer.router('server.json')
const middlewares = jsonServer.defaults({
    static: path.join(__dirname, 'dist') // Servindo arquivos estáticos do diretório 'dist'
  });

server.use(middlewares)
server.use(router)

server.listen(3333, () => {
  console.log('JSON Server is running')
})