const Sequelize = require('sequelize');

const sequelize = new Sequelize('assignment', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users=require('./users.model')(sequelize, Sequelize);
db.orders = require('./orders.model')(sequelize, Sequelize);
db.users.hasMany(db.orders,{
    foreignKey:"User_id",
  })

module.exports = db;