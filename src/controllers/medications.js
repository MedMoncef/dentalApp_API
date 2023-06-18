import Medication from '../models/Medication';

// Get all medications
const getAllMedications = async (req, res) => {
  try {
    const medications = await Medication.find();
    res.json(medications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve medications' });
  }
};

// Create a new medication
const createMedication = async (req, res) => {
  try {
    const medication = await Medication.create(req.body);
    res.status(201).json(medication);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create medication' });
  }
};

// Get medication by ID
const getMedicationByID = async (req, res) => {
  try {
    const medication = await Medication.findById(req.params.id);
    if (medication) {
      res.json(medication);
    } else {
      res.status(404).json({ error: 'Medication not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve medication' });
  }
};

// Update a medication
const updateMedication = async (req, res) => {
  try {
    const medication = await Medication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (medication) {
      res.json(medication);
    } else {
      res.status(404).json({ error: 'Medication not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update medication' });
  }
};

// Update a medication partially
const updateMedicationPartial = async (req, res) => {
  try {
    const medication = await Medication.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (medication) {
      res.json(medication);
    } else {
      res.status(404).json({ error: 'Medication not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to partially update medication' });
  }
};

// Delete a medication
const deleteMedication = async (req, res) => {
  try {
    const medication = await Medication.findByIdAndDelete(req.params.id);
    if (medication) {
      res.json({ message: 'Medication deleted successfully' });
    } else {
      res.status(404).json({ error: 'Medication not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete medication' });
  }
};

export {
  getAllMedications,
  createMedication,
  getMedicationByID,
  updateMedication,
  updateMedicationPartial,
  deleteMedication,
};