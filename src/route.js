const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

// define que o site.com/ será o index.ejs, etc
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

// Formato que o formulário de dentro da modal tem que passar a informação
// não precisa colocar create(req, res) por exemplo, pois segundo o express, ele já
// recebe implicitamente (fonte: documentação)
route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

// define o export do route para outros arquivos, como o server.js
module.exports = route