import Procedure from '../models/Procedure';

// Get all procedures
const getAllProcedures = async (req, res) => {
  try {
    const procedures = await Procedure.find();
    res.json(procedures);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve procedures' });
  }
};

// Create a new procedure
const createProcedure = async (req, res) => {
  try {
    const procedure = await Procedure.create(req.body);
    res.status(201).json(procedure);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create procedure' });
  }
};

// Get procedure by ID
const getProcedureByID = async (req, res) => {
  try {
    const procedure = await Procedure.findById(req.params.id);
    if (procedure) {
      res.json(procedure);
    } else {
      res.status(404).json({ error: 'Procedure not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve procedure' });
  }
};

// Update a procedure
const updateProcedure = async (req, res) => {
  try {
    const procedure = await Procedure.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (procedure) {
      res.json(procedure);
    } else {
      res.status(404).json({ error: 'Procedure not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update procedure' });
  }
};

// Update a procedure partially
const updateProcedurePartial = async (req, res) => {
  try {
    const procedure = await Procedure.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (procedure) {
      res.json(procedure);
    } else {
      res.status(404).json({ error: 'Procedure not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to partially update procedure' });
  }
};

// Delete a procedure
const deleteProcedure = async (req, res) => {
  try {
    const procedure = await Procedure.findByIdAndDelete(req.params.id);
    if (procedure) {
      res.json({ message: 'Procedure deleted successfully' });
    } else {
      res.status(404).json({ error: 'Procedure not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete procedure' });
  }
};

export {
  getAllProcedures,
  createProcedure,
  getProcedureByID,
  updateProcedure,
  updateProcedurePartial,
  deleteProcedure,
};