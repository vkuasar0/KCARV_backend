const { User } = require('../models');

exports.createMember = async (req, res) => {
  try {
    const member = await User.create({ ...req.body, role: 'member' });
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
