const express = require('express')
const router = express.Router()
const axios = require('axios')
const getJoke = require('../helpers/getJokes')



//http://localhost:3001 =>home page
router.get('/', (req, res)=> {
    //res.send('working...')
    const url = 'https://api.sampleapis.com/jokes/goodJokes'

    axios.get(url) //display random joke in terminal
        .then(resp => {
            //console.log(resp.data)

            // move to helper
            //const randomJoke = resp.data[Math.floor(Math.random() * resp.data.length)] //pull randomly from jokes

            //console.log(randomJoke)
            res.render('pages/home', {
                title: "desti Jokes App",
                name: "desti's jokes app!",
                joke: getJoke(resp.data) //taked getJoke function and move to another location
        })
    })
})


router.use('/jokes', require('./api/jokesRoutes'))


//error handling
router.use((req, res, next)=> {
    res.status(404)
    .render('pages/404',{
        title: '404 Error',
        name: 'Jokes on you'
    })
})

module.exports = router 