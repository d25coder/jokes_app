const express = require('express')
const router = express.Router()
const axios = require('axios')
const PORT = process.env.PORT || 3001


// http://localhost:3001
router.get('/', (req, res)=> {
    //res.send('This works')
    const url = 'https://api.sampleapis.com/jokes/goodJokes'

    axios.get(url)
        .then(resp => res.json(resp))
        .then(res.send('data received'))

})

module.exports = router
