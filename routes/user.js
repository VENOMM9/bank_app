
const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/middleware');

userRouter.get('/:userId', authMiddleware.verifyToken, userController.getUser);
userRouter.put('/:userId/update-balance', authMiddleware.verifyToken, userController.updateBalance);




module.exports = userRouter