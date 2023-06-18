import express from 'express';
import {
  getAllAppointments,
  createAppointment,
  getAppointmentByID,
  updateAppointment,
  updateAppointmentPartial,
  deleteAppointment,
} from '../controllers/appointments';

const router = express.Router();

router.get('/appointments', getAllAppointments);
router.post('/appointments', createAppointment);
router.get('/appointments/:id', getAppointmentByID);
router.put('/appointments/:id', updateAppointment);
router.patch('/appointments/:id', updateAppointmentPartial);
router.delete('/appointments/:id', deleteAppointment);

export default router;