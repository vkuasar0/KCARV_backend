const express = require('express');
const { requestBorrow, approveRequest, rejectRequest, returnItem, getAllBorrowRequests, getUserBorrowRequests, deleteRequest } = require('../controllers/borrowController');
const { authenticateUser, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

// Request to borrow an item
router.post('/borrow', authenticateUser, requestBorrow);

// Approve a borrow request (Admin only)
router.put('/borrow/approve/:requestId', authenticateUser, isAdmin, approveRequest);

// Reject a borrow request (Admin only)
router.put('/borrow/reject/:requestId', authenticateUser, isAdmin, rejectRequest);

// Return a borrowed item (for both Admin and Member)
router.put('/borrow/return/:requestId', authenticateUser, returnItem);

router.get('/borrow', authenticateUser, isAdmin, getAllBorrowRequests);

router.get('/borrow/user', authenticateUser, getUserBorrowRequests);

router.delete('/borrow/:requestId', authenticateUser, deleteRequest);

module.exports = router;
