const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('order', {
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed')
  }
})

module.exports = Orders
