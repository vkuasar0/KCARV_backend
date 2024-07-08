module.exports = (sequelize, DataTypes) => {
    const Announcement = sequelize.define('Announcement', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
    return Announcement;
  };
  