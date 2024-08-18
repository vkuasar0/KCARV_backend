const express = require('express');
const { createAnnouncement, getAnnouncements, deleteAnnouncements } = require('../controllers/announcementController');
const router = express.Router();

router.post('/announcements', createAnnouncement);
router.get('/announcements', getAnnouncements);
router.delete('/announcements/:id', deleteAnnouncements)

module.exports = router;
