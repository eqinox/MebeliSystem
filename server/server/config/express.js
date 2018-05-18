const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const User = require('mongoose').model('User')
const settings = require('../config/settings')

module.exports = (app) => {  
  app.use(cors())
  app.use(cookieParser())  
  // app.use(bodyParser())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  routes(app)
}