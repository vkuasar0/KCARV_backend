const { PDItem } = require('../models');

exports.createPDItem = async (req, res) => {
  try {
    const pdItem = await PDItem.create(req.body);
    res.status(201).json(pdItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPDItems = async (req, res) => {
  try {
    const pdItems = await PDItem.findAll();
    res.status(200).json(pdItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.editPDItem = async (req, res) => {
  try {
    const { id } = req.params;
    const pdItem = await PDItem.findByPk(id);
    
    if (!pdItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Update the PDItem with new data
    await pdItem.update(req.body);
    
    res.status(200).json(pdItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePDItem = async (req, res) => {
  try {
    const { id } = req.params;
    const pdItem = await PDItem.findByPk(id);

    if (!pdItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Delete the PDItem
    await pdItem.destroy();

    res.status(204).send(); // No content
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
