import Invoice from '../models/Invoice';

// Get all invoices
const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().populate('patient');
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve invoices' });
  }
};

// Create a new invoice
const createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create invoice' });
  }
};

// Get invoice by ID
const getInvoiceByID = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id).populate('patient');
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ error: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve invoice' });
  }
};

// Update an invoice
const updateInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('patient');
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ error: 'Invoice not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update invoice' });
  }
};

// Update an invoice partially
const updateInvoicePartial = async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).populate('patient');
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ error: 'Invoice not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to partially update invoice' });
  }
};

// Delete an invoice
const deleteInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);
    if (invoice) {
      res.json({ message: 'Invoice deleted successfully' });
    } else {
      res.status(404).json({ error: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete invoice' });
  }
};

export {
  getAllInvoices,
  createInvoice,
  getInvoiceByID,
  updateInvoice,
  updateInvoicePartial,
  deleteInvoice,
};