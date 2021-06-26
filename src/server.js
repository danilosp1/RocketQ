const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

// define a view engine sendo .ejs
// assim ele chama no route o arquivo certo
server.set('view engine', 'ejs')

// procura na raiz do projeto a pasta public
server.use(express.static("public"))

// chama a pasta certa: retorna RocketQ/src/views
// __dirname = diretório atual (nesse caso, src/)
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

// coloca para o server utilizar o route.js como rota
server.use(route)

// define host
server.listen(3000, () => console.log("Rodando"))