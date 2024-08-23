const { BorrowRequest, PDItem, User } = require('../models');

// Request to borrow an item
exports.requestBorrow = async (req, res) => {
  try {
    const { itemId } = req.body;
    const userId = req.user.id;

    const item = await PDItem.findByPk(itemId);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    if (item.isBorrowed) {
      return res.status(400).json({ message: 'Item is already borrowed' });
    }

    await item.update({ isBorrowed: true});

    const borrowRequest = await BorrowRequest.create({
      userId,
      itemId,
      status: 'pending'
    });

    res.status(201).json(borrowRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Approve a borrow request
exports.approveRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    const borrowRequest = await BorrowRequest.findByPk(requestId, {
      include: [{ model: PDItem, as: 'item' }]
    });

    if (!borrowRequest) {
      return res.status(404).json({ message: 'Borrow request not found' });
    }

    if (borrowRequest.status !== 'pending') {
      return res.status(400).json({ message: 'Request has already been processed' });
    }

    if (!borrowRequest.item) {
      return res.status(404).json({ message: 'Associated item not found' });
    }

    if (borrowRequest.item.isBorrowed) {
      return res.status(400).json({ message: 'Item is already borrowed' });
    }

    // Mark the item as borrowed
    await borrowRequest.item.update({ isBorrowed: true });

    // Update the request status to approved
    await borrowRequest.update({ status: 'approved' });

    res.status(200).json(borrowRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reject a borrow request
exports.rejectRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    const borrowRequest = await BorrowRequest.findByPk(requestId);

    if (!borrowRequest) {
      return res.status(404).json({ message: 'Borrow request not found' });
    }

    if (borrowRequest.status !== 'pending') {
      return res.status(400).json({ message: 'Request has already been processed' });
    }

    // Update the request status to rejected
    await borrowRequest.update({ status: 'rejected' });

    res.status(200).json(borrowRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Return an item (mark as not borrowed)
exports.returnItem = async (req, res) => {
  try {
    const { requestId } = req.params;

    const borrowRequest = await BorrowRequest.findByPk(requestId, {
      include: ['item']
    });

    if (!borrowRequest || borrowRequest.status !== 'approved') {
      return res.status(404).json({ message: 'Approved borrow request not found' });
    }

    // Mark the item as not borrowed
    await borrowRequest.item.update({ isBorrowed: false });

    res.status(200).json({ message: 'Item returned successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBorrowRequests = async (req, res) => {
  try {
    const borrowRequests = await BorrowRequest.findAll({
      include: [
        { model: User, as: 'user', attributes: ['id', 'name', 'email'] },
        { model: PDItem, as: 'item', attributes: ['id', 'name', 'description'] }
      ]
    });

    res.status(200).json(borrowRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};