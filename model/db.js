const config = require('../config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    config.DATABASE,
    config.USERNAME,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.DIALECT,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle,
        }
    }
)

sequelize.authenticate().then(() => {
    console.log("Db connected");
}).catch((e) => {
    console.log("Unable to connect to the databse", e);
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// table
db.articles = require('./articles.model')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
    console.log("Resync complete");
})

db.sequelize.sync({ alter: false }).then(() => {
    console.log("Db updated");
})

module.exports = db;