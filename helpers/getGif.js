// randomly select a troll Gif, when the joke displays randomly, a random gif will display

//hard coding the gifs here
const getGif=()=> {
const gifArr = [
    'https://media.giphy.com/media/hVIEywSQ3ZU3u/giphy.gif',
    'https://media.tenor.com/images/ee0943a8ce5c51d5776cb522445278f0/tenor.gif',
    'https://tse3.mm.bing.net/th/id/OIP.hN5nwEAbYqFlrlbyd7RxYAHaGV?rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGpleHVoNWljNGNwZGZzdDl2MnFzbmQxZjZ6Mnd3aWJ1Z3ppY3kxciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PSrrFxTp6qWGY/giphy.gif'
]
const randomGif = gifArr[Math.floor(Math.random() * gifArr.length)]

return randomGif
}

//export gif first
module.exports = getGif