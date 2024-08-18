const express = require('express');
const { loginAdmin, loginMember } = require('../controllers/authController');
const router = express.Router();

// Login routes
router.post('/login/admin', loginAdmin);
router.post('/login/member', loginMember);

module.exports = router;
