const express = require('express')
// router object is capable of performing middleware and routing functions
const router = express.Router()

// when a post request is made to the signup route the handler function will invoke
router.post('/signup', (req, res) => {
    res.send('You made a post request')
})

module.exports = router