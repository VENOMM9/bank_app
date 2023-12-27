const express = require('express');
const transactionRouter = express.Router();
const transactionController = require('../controllers/transactionController');

// Create a new transaction
transactionRouter.post('/transactions', transactionController.createTransaction);

// Get all transactions
transactionRouter.get('/transactions', transactionController.getAllTransactions);

// Other routes for updating, deleting, etc.

module.exports = transactionRouter;