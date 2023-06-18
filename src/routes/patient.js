import express from 'express';
import {
  getAllPatients,
  createPatient,
  getPatientByID,
  updatePatient,
  updatePatientPartial,
  deletePatient,
} from '../controllers/patients';

const router = express.Router();

router.get('/patients', getAllPatients);
router.post('/patients', createPatient);
router.get('/patients/:id', getPatientByID);
router.put('/patients/:id', updatePatient);
router.patch('/patients/:id', updatePatientPartial);
router.delete('/patients/:id', deletePatient);

export default router;