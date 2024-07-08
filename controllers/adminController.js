const { User } = require('../models');

exports.createAdmin = async (req, res) => {
  try {
    const admin = await User.create({ ...req.body, role: 'admin' });
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
