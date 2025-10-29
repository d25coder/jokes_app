const express = require('express')
const router = express.Router()
const axios = require('axios')
//imported Pagination
const { paginationResults, buildJokeArr } = require('../../helpers/pagination')
//then import gif
const getGif = require('../../helpers/getGif')
const PORT = process.env.PORT || 3001


// http://localhost:3001
router.get('/', (req, res)=> {
//res.send('This works')
    const url = 'https://api.sampleapis.com/jokes/goodJokes'

// pagination
const pageData = paginationResults(req)

//console.log(pageData)
//will store jokes here
    let jokesArr = []

    axios.get(url)
        .then(resp => {
//pagination
            const jokeArrData = buildJokeArr(resp.data, jokesArr, pageData.startIdx, pageData.endIdx, pageData.page )

             res.render('pages/allJokes', {
                title: 'All Jokes',
                name: 'All Jokes',
                data: jokeArrData.arr,
                prev: jokeArrData.prev,
                next: jokeArrData.next
            })
        }) 
     })


//joke type
// localhost:3001/jokes/type/:type
    router.get('/type/:type', (req, res)=> {
        const type = req.params.type
        const url ='https://api.sampleapis.com/jokes/goodJokes'
        const pageData = paginationResults(req)


//we will filter through resp.data and store in typeArr
        let typeArr = []
        let jokesArr = []

        axios.get(url)
        .then(resp => typeArr = resp.data.filter(item => item.type == type))
        .then(typeArr => { 
            const jokeArrData = buildJokeArr(typeArr, jokesArr, pageData.startIdx, pageData.endIdx, pageData.page)

            res.render('pages/allJokes', {
                title: type,
                name: `${type} jokes`,
                data: jokeArrData.arr,
                prev: jokeArrData.prev,
                next: jokeArrData.next
        })
    }) 

})

//pull a Single Joke
//anything read 
router.get('/:id', (req, res)=> {
//
    const id = req.params.id
    const url = `https://api.sampleapis.com/jokes/goodJokes/${id}`

    axios.get(url)
        .then(resp => {
            const joke = resp.data //added here so that we dont have to add it in lines 76-78
            res.render('pages/singleJoke',{
                title: joke.setup,
                name: joke.setup,
                punchline: joke.punchline,
                img: getGif() //function to return image
            })
        })
})
module.exports = router
