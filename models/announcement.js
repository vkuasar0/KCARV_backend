module.exports = (sequelize, DataTypes) => {
  const Announcement = sequelize.define('Announcement', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vertical: {
      type: DataTypes.ENUM('acting', 'production_design', 'script', 'technical', 'music', 'media', 'all'),
      allowNull: false,
      defaultValue: 'all'
    }
  });
  return Announcement;
};
