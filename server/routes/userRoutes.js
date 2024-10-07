const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

const { getAllUsers } = require('../controllers/userController')

// @route   GET api/users
// @desc    Get all users (admin only)
// @access  Private (admin)
router.get('/', authMiddleware, authMiddleware.checkAdmin, getAllUsers);

module.exports = router;