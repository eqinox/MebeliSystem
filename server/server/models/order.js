const mongoose = require('mongoose')

const ERROR_VALIDATION_MESSAGE = '{PATH} is required'

let orderSchema = mongoose.Schema({
  name: { type: String, required: ERROR_VALIDATION_MESSAGE },
  phone: { type: String },
  city: { type: String, requried: ERROR_VALIDATION_MESSAGE },
  neighborhood: { type: String, required: ERROR_VALIDATION_MESSAGE },
  deposit: { type: Number, required: ERROR_VALIDATION_MESSAGE },
  finalPrice: { type: Number, requried: ERROR_VALIDATION_MESSAGE },
  date: { type: Date, required: ERROR_VALIDATION_MESSAGE }
})

let Order = mongoose.model('Order', orderSchema)

module.exports = Order
