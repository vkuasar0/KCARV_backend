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
      allowNull: true,
      defaultValue: []
    },
    library: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    status: {
      type: DataTypes.ENUM('ongoing', 'complete'),
      allowNull: false,
      defaultValue: 'ongoing'
    },
    thumbnail: {
      type: DataTypes.STRING, // URL to the thumbnail image
      allowNull: true
    }
  });

  return Event;
};
