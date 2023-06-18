import express from 'express';
import {
  getAllPayments,
  createPayment,
  getPaymentByID,
  updatePayment,
  updatePaymentPartial,
  deletePayment,
} from '../controllers/payments';

const router = express.Router();

router.get('/payments', getAllPayments);
router.post('/payments', createPayment);
router.get('/payments/:id', getPaymentByID);
router.put('/payments/:id', updatePayment);
router.patch('/payments/:id', updatePaymentPartial);
router.delete('/payments/:id', deletePayment);

export default router;