import Consultation from '../models/Consultation';

// Get all consultations
const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().populate('procedures');
    res.json(consultations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve consultations' });
  }
};

// Create a new consultation
const createConsultation = async (req, res) => {
  try {
    const consultation = await Consultation.create(req.body);
    res.status(201).json(consultation);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create consultation' });
  }
};

// Get consultation by ID
const getConsultationByID = async (req, res) => {
  try {
    const consultation = await Consultation.findById(req.params.id).populate('procedures');
    if (consultation) {
      res.json(consultation);
    } else {
      res.status(404).json({ error: 'Consultation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve consultation' });
  }
};

// Update a consultation
const updateConsultation = async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('procedures');
    if (consultation) {
      res.json(consultation);
    } else {
      res.status(404).json({ error: 'Consultation not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update consultation' });
  }
};

// Update a consultation partially
const updateConsultationPartial = async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).populate('procedures');
    if (consultation) {
      res.json(consultation);
    } else {
      res.status(404).json({ error: 'Consultation not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to partially update consultation' });
  }
};

// Delete a consultation
const deleteConsultation = async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndDelete(req.params.id);
    if (consultation) {
      res.json({ message: 'Consultation deleted successfully' });
    } else {
      res.status(404).json({ error: 'Consultation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete consultation' });
  }
};

export {
  getAllConsultations,
  createConsultation,
  getConsultationByID,
  updateConsultation,
  updateConsultationPartial,
  deleteConsultation,
};