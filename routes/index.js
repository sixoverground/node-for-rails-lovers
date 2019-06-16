const express = require('express')
const articlesRouter = require('./articles')

const router = express.Router()

router.get('/', (req, res) => res.send('I am Node!'))

router.use('/articles', articlesRouter)

module.exports = router