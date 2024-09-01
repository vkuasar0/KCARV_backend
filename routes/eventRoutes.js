const express = require('express');
const {
  createEvent,
  getEvents,
  addParticipants,
  getEventById,
  markEventAsComplete,
  updateEventLibrary,
  uploadEventThumbnail
} = require('../controllers/eventController');
const multer = require('multer');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

// Create a new event
router.post('/events', createEvent);

// Get all events
router.get('/events', getEvents);

// Add participants to an event
router.put('/events/:id/participants', addParticipants);

// Get a specific event by ID
router.get('/events/:id', getEventById);

// Mark an event as complete
router.put('/events/:id/complete', markEventAsComplete);

// Update the event library
router.put('/events/:id/library', updateEventLibrary);

router.post('/events/:id/thumbnail', upload.single('thumbnail'), uploadEventThumbnail);

module.exports = router;
