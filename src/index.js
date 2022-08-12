const express = require('express')

const app = express()

// anytime this get request to the root path of the application is invoked this function will get called automatically
// with a request object - representing the incoming http request - and a response object - which represents the outgoing response
app.get('/', (req,res) => {
    res.send('Hi There!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})