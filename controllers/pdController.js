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
