const { Event } = require('../models');

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addParticipants = async (req, res) => {
  try {
    const { id } = req.params;
    const { participants } = req.body;

    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.status === 'complete') {
      return res.status(400).json({ message: 'Cannot add participants to a completed event' });
    }

    // Add participants to the existing list
    const updatedParticipants = [...participants];
    await event.update({ participants: updatedParticipants });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific event by ID
exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark an event as complete
exports.markEventAsComplete = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.status === 'complete') {
      return res.status(400).json({ message: 'Event is already marked as complete' });
    }

    await event.update({ status: 'complete' });

    res.status(200).json({ message: 'Event marked as complete', event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update the event library
exports.updateEventLibrary = async (req, res) => {
  try {
    const { id } = req.params;
    const { library } = req.body;

    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Update the event library
    await event.update({ library });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};