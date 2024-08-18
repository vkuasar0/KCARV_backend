require('dotenv').config();
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Secret key for JWT
const secretKey = process.env.JWT_SECRET;

// Login as Admin
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find admin by email and role
    const admin = await User.findOne({ where: { email, role: 'admin' } });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ id: admin.id, role: admin.role }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login as Member
exports.loginMember = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find member by email and role
    const member = await User.findOne({ where: { email, role: 'member' } });
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, member.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ id: member.id, role: member.role }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
