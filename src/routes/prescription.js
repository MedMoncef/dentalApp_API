import express from 'express';
import {
  getAllPrescriptions,
  createPrescription,
  getPrescriptionByID,
  updatePrescription,
  updatePrescriptionPartial,
  deletePrescription,
} from '../controllers/prescriptions';

const router = express.Router();

router.get('/prescriptions', getAllPrescriptions);
router.post('/prescriptions', createPrescription);
router.get('/prescriptions/:id', getPrescriptionByID);
router.put('/prescriptions/:id', updatePrescription);
router.patch('/prescriptions/:id', updatePrescriptionPartial);
router.delete('/prescriptions/:id', deletePrescription);

export default router;