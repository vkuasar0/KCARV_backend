module.exports = (sequelize, DataTypes) => {
    const BorrowRequest = sequelize.define('BorrowRequest', {
      status: {
        type: DataTypes.ENUM('pending', 'approved', 'rejected'),
        defaultValue: 'pending',
        allowNull: false
      }
    });
  
    BorrowRequest.associate = (models) => {
      // Request belongs to one user and one item
      BorrowRequest.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      BorrowRequest.belongsTo(models.PDItem, { foreignKey: 'itemId', as: 'item' });
    };
  
    return BorrowRequest;
  };
  