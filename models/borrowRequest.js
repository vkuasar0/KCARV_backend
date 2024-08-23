const { PDItem, User } = require(".");

module.exports = (sequelize, DataTypes) => {
  const BorrowRequest = sequelize.define('BorrowRequest', {
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      defaultValue: 'pending',
      allowNull: false
    },
    itemId: {
      type: DataTypes.INTEGER,
      references: {
        model: PDItem,
        key: 'id',
        onDelete: 'CASCADE'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
        onDelete: 'CASCADE'
      }
    }
  });

  return BorrowRequest;
};
