import express from 'express';
import {
  getAllMedications,
  createMedication,
  getMedicationByID,
  updateMedication,
  updateMedicationPartial,
  deleteMedication,
} from '../controllers/medications';

const router = express.Router();

router.get('/medications', getAllMedications);
router.post('/medications', createMedication);
router.get('/medications/:id', getMedicationByID);
router.put('/medications/:id', updateMedication);
router.patch('/medications/:id', updateMedicationPartial);
router.delete('/medications/:id', deleteMedication);

export default router;