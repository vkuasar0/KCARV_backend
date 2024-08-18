const express = require('express');
const {
  createPDItem,
  getPDItems,
  editPDItem,
  deletePDItem
} = require('../controllers/pdController');
const router = express.Router();

router.post('/pd-items', createPDItem);
router.get('/pd-items', getPDItems);
router.put('/pd-items/:id', editPDItem);
router.delete('/pd-items/:id', deletePDItem);

module.exports = router;
