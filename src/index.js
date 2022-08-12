const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const app = express()

app.use(authRoutes)
const mongoURI =
  'mongodb+srv://ironlionm4n:Danknug2!@cluster0.l5fwdzd.mongodb.net/test'
mongoose.connect(mongoURI)
mongoose.connection.on('connected', () => {
  console.log('On Connected Emitted')
})

mongoose.connection.on('error', err => {
  console.error('Error Connecting:', err)
  console.error('Error Connecting: ', err)
})

// anytime this get request to the root path of the application is invoked this function will get called automatically
// with a request object - representing the incoming http request - and a response object - which represents the outgoing response
app.get('/', (req, res) => {
  res.send('Hi There!')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
