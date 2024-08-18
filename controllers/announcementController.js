const { Announcement } = require('../models');

exports.createAnnouncement = async (req, res) => {
  try {
    const { title, content, vertical } = req.body;

    const announcement = await Announcement.create({
      title,
      content,
      vertical // This will be one of the allowed ENUM values
    });

    res.status(201).json(announcement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.findAll();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
