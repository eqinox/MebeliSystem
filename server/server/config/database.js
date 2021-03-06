const mongoose = require('mongoose')

require('../models/order')
require('../models/user')

module.exports = (settings) => {
  mongoose.connect(settings.connectionString).then().catch(err => {console.log(err)})

  let database = mongoose.connection

  database.on('open', (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Database connected')
  })

  database.on('error', (err) => {
    if (err) {
      console.log(err)
    }
  })
}