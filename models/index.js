const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(process.env.DB_URL);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require("./user")(sequelize, Sequelize);
db.PDItem = require("./pdItem")(sequelize, Sequelize);
db.Event = require("./event")(sequelize, Sequelize);
db.Announcement = require("./announcement")(sequelize, Sequelize);

// Define associations here
db.User.hasMany(db.Announcement);
db.Announcement.belongsTo(db.User);

db.Event.hasMany(db.PDItem);
db.PDItem.belongsTo(db.Event);

module.exports = db;
