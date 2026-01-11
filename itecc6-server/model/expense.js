const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  name: { type: String, required: true },       // Expense name
  amount: { type: Number, required: true },     // Expense amount
  category: { type: String, default: 'General' }, // Category (Food, Transport, etc.)
  date: { type: Date, default: Date.now },      // Date of expense
  paymentMode: { type: String, default: 'Cash' }, // Payment mode
  isPaid: { type: Boolean, default: false },    // Optional: mark if paid
});

module.exports = mongoose.model('Expense', expenseSchema);
