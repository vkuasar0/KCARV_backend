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
      type: DataTypes.JSON, // Storing participants as an array of user IDs or objects
      allowNull: true,
      defaultValue: []
    },
    library: {
      type: DataTypes.JSON, // Storing library content as an array of URLs or files
      allowNull: true,
      defaultValue: []
    },
    status: {
      type: DataTypes.ENUM('ongoing', 'complete'),
      allowNull: false,
      defaultValue: 'ongoing'
    }
  });

  return Event;
};
