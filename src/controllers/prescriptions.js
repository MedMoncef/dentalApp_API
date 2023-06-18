import Prescription from '../models/Prescription';

// Get all prescriptions
const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find()
      .populate('medications')
      .populate('patient')
      .populate('consultation');
    res.json(prescriptions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve prescriptions' });
  }
};

// Create a new prescription
const createPrescription = async (req, res) => {
  try {
    const prescription = await Prescription.create(req.body);
    res.status(201).json(prescription);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create prescription' });
  }
};

// Get prescription by ID
const getPrescriptionByID = async (req, res) => {
  try {
    const prescription = await Prescription.findById(req.params.id)
      .populate('medications')
      .populate('patient')
      .populate('consultation');
    if (prescription) {
      res.json(prescription);
    } else {
      res.status(404).json({ error: 'Prescription not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve prescription' });
  }
};

// Update a prescription
const updatePrescription = async (req, res) => {
  try {
    const prescription = await Prescription.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
      .populate('medications')
      .populate('patient')
      .populate('consultation');
    if (prescription) {
      res.json(prescription);
    } else {
      res.status(404).json({ error: 'Prescription not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update prescription' });
  }
};

// Update a prescription partially
const updatePrescriptionPartial = async (req, res) => {
  try {
    const prescription = await Prescription.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
      .populate('medications')
      .populate('patient')
      .populate('consultation');
    if (prescription) {
      res.json(prescription);
    } else {
      res.status(404).json({ error: 'Prescription not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to partially update prescription' });
  }
};

// Delete a prescription
const deletePrescription = async (req, res) => {
  try {
    const prescription = await Prescription.findByIdAndDelete(req.params.id);
    if (prescription) {
      res.json({ message: 'Prescription deleted successfully' });
    } else {
      res.status(404).json({ error: 'Prescription not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete prescription' });
  }
};

export {
  getAllPrescriptions,
  createPrescription,
  getPrescriptionByID,
  updatePrescription,
  updatePrescriptionPartial,
  deletePrescription,
};