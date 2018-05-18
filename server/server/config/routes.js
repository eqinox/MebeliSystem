const handlers = require('../handlers/index')
const auth = require('../auth/authentication');

module.exports = (app) => {
  app.post('/users/login', handlers.user.login)
  app.post('/users/logout', handlers.user.logout)
  app.post('/users/register', handlers.user.register)
  app.get('/users/profile', auth.isAuthenticated, handlers.user.profile)

  app.post('/orders/add', auth.isAuthenticated, handlers.order.add)
  app.get('/orders/all', auth.isAuthenticated, handlers.order.getAll)
  app.get('/orders/:id', auth.isAuthenticated, handlers.order.getById)
  app.put('/orders/update/:id', auth.isAuthenticated, handlers.order.update)
}