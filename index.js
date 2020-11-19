const path = require('path')
const fs = require('fs')
let dataFile;
try {
  dataFile = path.join(__dirname, 'db.json')
  fs.statSync(dataFile)
}catch{
  dataFile = './data/db.json'
}
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(dataFile)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('WEB API is running at port:3000')
  console.log('origin data file:',dataFile)
})