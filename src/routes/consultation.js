import express from 'express';
import {
  getAllConsultations,
  createConsultation,
  getConsultationByID,
  updateConsultation,
  updateConsultationPartial,
  deleteConsultation,
} from '../controllers/consultations';

const router = express.Router();

router.get('/consultations', getAllConsultations);
router.post('/consultations', createConsultation);
router.get('/consultations/:id', getConsultationByID);
router.put('/consultations/:id', updateConsultation);
router.patch('/consultations/:id', updateConsultationPartial);
router.delete('/consultations/:id', deleteConsultation);

export default router;