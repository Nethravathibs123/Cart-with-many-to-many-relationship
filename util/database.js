const Sequelize = require('sequelize');

const sequelize = new Sequelize('ManytoMany', 'root', 'Nethra@1', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize; 