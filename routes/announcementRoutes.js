const express = require('express');
const { createAnnouncement, getAnnouncements } = require('../controllers/announcementController');
const router = express.Router();

router.post('/announcements', createAnnouncement);
router.get('/announcements', getAnnouncements);

module.exports = router;
