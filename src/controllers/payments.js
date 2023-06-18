import Payment from '../models/Payment';

// Get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('invoice');
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve payments' });
  }
};

// Create a new payment
const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create payment' });
  }
};

// Get payment by ID
const getPaymentByID = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id).populate('invoice');
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve payment' });
  }
};

// Update a payment
const updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('invoice');
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update payment' });
  }
};

// Update a payment partially
const updatePaymentPartial = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).populate('invoice');
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to partially update payment' });
  }
};

// Delete a payment
const deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (payment) {
      res.json({ message: 'Payment deleted successfully' });
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete payment' });
  }
};

export {
  getAllPayments,
  createPayment,
  getPaymentByID,
  updatePayment,
  updatePaymentPartial,
  deletePayment,
};