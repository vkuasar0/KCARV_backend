const { Sequelize } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./user')(sequelize, Sequelize);
db.PDItem = require('./pdItem')(sequelize, Sequelize);
db.Event = require('./event')(sequelize, Sequelize);
db.Announcement = require('./announcement')(sequelize, Sequelize);

// Define associations here
db.User.hasMany(db.Announcement);
db.Announcement.belongsTo(db.User);

db.Event.hasMany(db.PDItem);
db.PDItem.belongsTo(db.Event);

module.exports = db;
