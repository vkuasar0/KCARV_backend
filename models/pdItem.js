module.exports = (sequelize, DataTypes) => {
  const PDItem = sequelize.define('PDItem', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isBorrowed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  });

  PDItem.associate = (models) => {
    // An item can have many borrow requests
    PDItem.hasMany(models.BorrowRequest, { foreignKey: 'itemId', as: 'borrowRequests' });
  };

  return PDItem;
};
