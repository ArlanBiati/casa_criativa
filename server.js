const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const ideias = require('./ideias')


server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function (req, res) {
  res.render('home', {ideias})
})

server.get('/ideias', function (req, res) {
  res.render('ideias', {ideias})
})

server.get('/ideia', function (req, res) {
  res.render('ideias', {ideias})
})











server.listen(3333, function() {
  console.log('Server Runing')
})