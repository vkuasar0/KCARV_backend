const express = require('express');
const { createAnnouncement, getAnnouncements, deleteAnnouncements } = require('../controllers/announcementController');
const router = express.Router();
const { authenticateUser, isAdmin } = require('../middlewares/authMiddleware');

router.post('/announcements', createAnnouncement);
router.get('/announcements', getAnnouncements);
router.delete('/announcements/:id', authenticateUser, isAdmin, deleteAnnouncements)

module.exports = router;
