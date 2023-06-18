import express from 'express';
import {
  getAllAppointmentReminders,
  createAppointmentReminder,
  getAppointmentReminderByID,
  updateAppointmentReminder,
  updateAppointmentReminderPartial,
  deleteAppointmentReminder,
} from '../controllers/appointmentsReminders';

const router = express.Router();

router.get('/appointment-reminders', getAllAppointmentReminders);
router.post('/appointment-reminders', createAppointmentReminder);
router.get('/appointment-reminders/:id', getAppointmentReminderByID);
router.put('/appointment-reminders/:id', updateAppointmentReminder);
router.patch('/appointment-reminders/:id', updateAppointmentReminderPartial);
router.delete('/appointment-reminders/:id', deleteAppointmentReminder);

export default router;