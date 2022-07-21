const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()
const PORT = process.env.PORT || 1000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
