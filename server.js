const express = require('express')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

// const PORT = process.env.PORT || 3000
const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(bodyParser.json()) //parse json which in body
app.use(bodyParser.urlencoded({ extended: true })) //line properly parse data of form

let clients = [
  {
    id: 1,
    nameClient: 'Hashirama',
    phone: 095679842,
    email: 'StrongBaby@gmail.com',
  },
  {
    id: 2,
    nameClient: 'Tobirama',
    phone: 095679842,
    email: 'StrongBaby@gmail.com',
  },
  {
    id: 3,
    nameClient: 'Hiruzen',
    phone: 095679842,
    email: 'StrongBaby@gmail.com',
  },
]

app.get('/', function (req, res) {
  res.send('Hello PusiJucie')
})

app.get('/clients', function (req, res) {
  res.send(clients)
})

app.get('/clients/:id', function (req, res) {
  console.log(req.params)
  let client = clients.find(function (client) {
    return client.id === Number(req.params.id)
  })
  res.send(client)
})

app.post('/clients', function (req, res) {
  let client = {
    id: Date.now(),
    phone: req.body.phone,
    email: req.body.email,
    nameClient: req.body.name,
  }
  clients.push(client)
  res.send(client)
})

app.put('/clients/:id', function (req, res) {
  let client = clients.find(function (client) {
    return client.id === Number(req.params.id)
  })
  client.name = req.body.name
  client.phone = req.body.phone
  client.email = req.body.email
  res.sendStatus(200)
})

app.delete('/clients/:id', function (req, res) {
  clients = clients.filter(function (client) {
    return client.id !== Number(req.params.id)
  })
  res.sendStatus(200)
})

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://pasher:12345_pasher@cluster0.jmukc.mongodb.net/clients',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    )
    app.listen(4000, function () {
      console.log('HI')
    })
  } catch (e) {
    console.log(e)
  }
}

start()
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json))
