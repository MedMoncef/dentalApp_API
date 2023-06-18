import AppointmentReminder from '../models/AppointmentReminder';

// Get all appointment reminders
const getAllAppointmentReminders = async (req, res) => {
  try {
    const appointmentReminders = await AppointmentReminder.find();
    res.json(appointmentReminders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve appointment reminders' });
  }
};

// Create a new appointment reminder
const createAppointmentReminder = async (req, res) => {
  try {
    const appointmentReminder = await AppointmentReminder.create(req.body);
    res.status(201).json(appointmentReminder);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create appointment reminder' });
  }
};

// Get appointment reminder by ID
const getAppointmentReminderByID = async (req, res) => {
  try {
    const appointmentReminder = await AppointmentReminder.findById(req.params.id);
    if (appointmentReminder) {
      res.json(appointmentReminder);
    } else {
      res.status(404).json({ error: 'Appointment reminder not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve appointment reminder' });
  }
};

// Update an appointment reminder
const updateAppointmentReminder = async (req, res) => {
  try {
    const appointmentReminder = await AppointmentReminder.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (appointmentReminder) {
      res.json(appointmentReminder);
    } else {
      res.status(404).json({ error: 'Appointment reminder not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update appointment reminder' });
  }
};

// Update an appointment reminder partially
const updateAppointmentReminderPartial = async (req, res) => {
  try {
    const appointmentReminder = await AppointmentReminder.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (appointmentReminder) {
      res.json(appointmentReminder);
    } else {
      res.status(404).json({ error: 'Appointment reminder not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to partially update appointment reminder' });
  }
};

// Delete an appointment reminder
const deleteAppointmentReminder = async (req, res) => {
  try {
    const appointmentReminder = await AppointmentReminder.findByIdAndDelete(req.params.id);
    if (appointmentReminder) {
      res.json({ message: 'Appointment reminder deleted successfully' });
    } else {
      res.status(404).json({ error: 'Appointment reminder not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete appointment reminder' });
  }
};

export {
  getAllAppointmentReminders,
  createAppointmentReminder,
  getAppointmentReminderByID,
  updateAppointmentReminder,
  updateAppointmentReminderPartial,
  deleteAppointmentReminder,
};