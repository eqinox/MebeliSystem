const path = require('path')

module.exports = {
  development: {
    port: 1338,
    connectionString: 'mongodb://localhost:27017/MebeliSystem',
    rootPath: path.normalize(path.join(__dirname, '/../../')),
    secret: 'neshto-taino!@#$%'
  },
  production: {

  }
}
