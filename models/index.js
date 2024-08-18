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
db.BorrowRequest = require('./borrowRequest')(sequelize, Sequelize);

// Define associations here
db.User.hasMany(db.Announcement);
db.Announcement.belongsTo(db.User);

db.Event.hasMany(db.PDItem);
db.PDItem.belongsTo(db.Event);

db.User.hasMany(db.BorrowRequest, { foreignKey: 'userId', as: 'borrowRequests' });
db.PDItem.hasMany(db.BorrowRequest, { foreignKey: 'itemId', as: 'borrowRequests' });
db.BorrowRequest.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });
db.BorrowRequest.belongsTo(db.PDItem, { foreignKey: 'itemId', as: 'item' });

module.exports = db;
