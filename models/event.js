module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      participants: {
        type: DataTypes.JSON,
        allowNull: true
      },
      library: {
        type: DataTypes.JSON,
        allowNull: true
      }
    });
    return Event;
  };
  