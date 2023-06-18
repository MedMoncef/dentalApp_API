import Patient from '../models/Patient';

// Get all patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve patients' });
  }
};

// Create a new patient
const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create patient' });
  }
};

// Get patient by ID
const getPatientByID = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve patient' });
  }
};

// Update a patient
const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update patient' });
  }
};

// Update a patient partially
const updatePatientPartial = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to partially update patient' });
  }
};

// Delete a patient
const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (patient) {
      res.json({ message: 'Patient deleted successfully' });
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete patient' });
  }
};

export {
  getAllPatients,
  createPatient,
  getPatientByID,
  updatePatient,
  updatePatientPartial,
  deletePatient,
};