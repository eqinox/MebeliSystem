const Order = require('mongoose').model('Order')
const url = require('url')

module.exports.add = (req, res) => {
  let order = req.body

  let newOrder = {
    name: order.name,
    phone: order.phone,
    city: order.city,
    neighborhood: order.neighborhood,
    deposit: order.deposit,
    finalPrice: order.finalPrice,
    furnitures: order.furnitures,
    date: order.date
  }

  Order.create(newOrder)
    .then(order => {
      return res.status(200).json({
        success: true,
        message: 'successfuly added',
        order
      })
    })
    .catch(err => {
      return res.status(200).json({
        success: false,
        message: err
      })
    })
}

module.exports.getAll = (req, res) => {
  let parsedUrl = url.parse(req.url, true)

  let nameRegex = parsedUrl.query.name ? new RegExp("^" + parsedUrl.query.name.toLowerCase(), "i") : null;
  let neighborhoodRegex = parsedUrl.query.neighborhood ? new RegExp("^" + parsedUrl.query.neighborhood.toLowerCase(), "i") : null;
  let cityRegex = parsedUrl.query.city ? new RegExp("^" + parsedUrl.query.city.toLowerCase(), "i") : null;
  // let dateFrom = parsedUrl.query.dateFrom ? parsedUrl.query.dateFrom : new Date(-864000000000000);
  // let dateTo = parsedUrl.query.dateTo ? parsedUrl.query.dateTo : new Date(864000000000000);

  if(nameRegex && neighborhoodRegex && cityRegex) {
    Order.find({
      name: nameRegex,
      neighborhood: neighborhoodRegex,
      city: cityRegex
      // date: {
      //   $gte: dateFrom,
      //   $lte: dateTo
      // }
    })
    .then(orders => {
      return res.status(200).json({orders})
    })
  } else if(nameRegex && neighborhoodRegex) {
    Order.find({
      name: nameRegex,
      neighborhood: neighborhoodRegex
    })
    .then(orders => {
      return res.status(200).json({orders})
    })
  } else if(nameRegex && cityRegex) {
    Order.find({
      name: nameRegex,
      city: cityRegex
    })
    .then(orders => {
      return res.status(200).json({orders})
    })
  } else if(cityRegex && neighborhoodRegex) {
    Order.find({
      neighborhood: neighborhoodRegex,
      city: cityRegex
    })
    .then(orders => {
      return res.status(200).json({orders})
    })
  } else if(nameRegex) {
    Order.find({name: nameRegex})
    .then(orders => {
      return res.status(200).json({orders})
    })
  } else if(cityRegex) {
    Order.find({city: cityRegex})
    .then(orders => {
      return res.status(200).json({orders})
    })
  } else if(neighborhoodRegex) {
    Order.find({neighborhood: neighborhoodRegex})
    .then(orders => {
      return res.status(200).json({orders})
    })
  } else {
    Order.find()
    .then(orders => {
      return res.status(200).json({orders})
    })
  }
}

module.exports.getById = (req, res) => {
  let id = req.param('id')

  Order.findById(id)
    .then(order => {
      return res.status(200).json({
        success: true,
        order
      })
    })
    .catch(err => {
      return res.status(200).json({
        success: false,
        message: err
      })
    })
}

module.exports.update = (req, res) => {
  let order = req.body
  let id = req.param('id')

  let updatedOrder = {
    name: order.name,
    phone: order.phone,
    city: order.city,
    neighborhood: order.neighborhood,
    deposit: order.deposit,
    finalPrice: order.finalPrice,
    furnitures: order.furnitures
  }

  Order.findByIdAndUpdate(id, updatedOrder)
    .then(order => {
      return res.status(200).json({
        success: true,
        message: 'Updated Successfuly',
        order: updatedOrder
      })
    })
    .catch(err => {
      return res.status(200).json({
        success: false,
        message: err
      })
    })
}
