const Transaction = require('../models/transaction');

// Create a new transaction
async function createTransaction(req, res) {
  try {
    const { amount, description } = req.body;

    const newTransaction = new Transaction({
      amount,
      description,
    });

    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get all transactions
async function getAllTransactions(req, res) {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  createTransaction,
  getAllTransactions,
};