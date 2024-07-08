module.exports = (sequelize, DataTypes) => {
    const PDItem = sequelize.define('PDItem', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
    return PDItem;
  };
  