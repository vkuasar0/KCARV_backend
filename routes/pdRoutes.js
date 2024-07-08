const express = require('express');
const { createPDItem, getPDItems } = require('../controllers/pdController');
const router = express.Router();

router.post('/pd-items', createPDItem);
router.get('/pd-items', getPDItems);

module.exports = router;
