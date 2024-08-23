const express = require('express');
const { getUserDetails } = require('../controllers/userController');
const { authenticateUser } = require('../middlewares/authMiddleware');
const router = express.Router();

// Get the authenticated user's details
router.get('/user/me', authenticateUser, getUserDetails);

module.exports = router;
