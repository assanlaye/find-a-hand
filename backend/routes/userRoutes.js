const express = require('express');
const { registerUser, loginUser, getUserProfile, getUserById } = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware');


const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.get('/:id', getUserById);

module.exports = router;