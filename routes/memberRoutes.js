const express = require('express');
const { createMember } = require('../controllers/memberController');
const router = express.Router();

router.post('/members', createMember);

module.exports = router;
