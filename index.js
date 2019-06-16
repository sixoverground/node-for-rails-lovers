const bodyParser = require('body-parser')
const express = require('express')
const knex = require('knex')
const methodOverride = require('method-override')
const { Model } = require('objection')
const knexConfig = require('./knexfile')
const router = require('./routes')

const app = express()
const port = 3000

const db = knex(knexConfig[process.env.NODE_ENV || 'development'])
Model.knex(db)

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use('/', router)

app.listen(port, () => console.log(`My blog is listening on port ${port}!`))