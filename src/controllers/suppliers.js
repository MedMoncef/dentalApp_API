import Supplier from '../models/Supplier';

// Get all suppliers
const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve suppliers' });
  }
};

// Create a new supplier
const createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create supplier' });
  }
};

// Get supplier by ID
const getSupplierByID = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (supplier) {
      res.json(supplier);
    } else {
      res.status(404).json({ error: 'Supplier not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve supplier' });
  }
};

// Update a supplier
const updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (supplier) {
      res.json(supplier);
    } else {
      res.status(404).json({ error: 'Supplier not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update supplier' });
  }
};

// Update a supplier partially
const updateSupplierPartial = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (supplier) {
      res.json(supplier);
    } else {
      res.status(404).json({ error: 'Supplier not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to partially update supplier' });
  }
};

// Delete a supplier
const deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndDelete(req.params.id);
    if (supplier) {
      res.json({ message: 'Supplier deleted successfully' });
    } else {
      res.status(404).json({ error: 'Supplier not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete supplier' });
  }
};

export {
  getAllSuppliers,
  createSupplier,
  getSupplierByID,
  updateSupplier,
  updateSupplierPartial,
  deleteSupplier,
};