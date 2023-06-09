require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    sequelize.authenticate()
    .then(() => {
      console.log('Connection has been successfully established')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })

module.exports = sequelize;
