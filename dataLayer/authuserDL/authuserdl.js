const dbConfig = require("../../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const authusersdb = {};

authusersdb.Sequelize = Sequelize;
authusersdb.sequelize = sequelize;

authusersdb.authusers = require("../../models/authuserModels/authuser.model.js")(sequelize, Sequelize);

module.exports = authusersdb;
