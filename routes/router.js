const express = require('express')
const router = express.Router()

//http://localhost:3001
router.get('/', (req, res)=> {
    res.send('working...')
})


router.use('/jokes', require('./api/jokesRoutes'))


//error handling
router.use((req, res, next)=> {
    res.status(404).send("404 Error. This page does not exist")
})

module.exports = router 