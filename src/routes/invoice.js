import express from 'express';
import {
  getAllInvoices,
  createInvoice,
  getInvoiceByID,
  updateInvoice,
  updateInvoicePartial,
  deleteInvoice,
} from '../controllers/invoices';

const router = express.Router();

router.get('/invoices', getAllInvoices);
router.post('/invoices', createInvoice);
router.get('/invoices/:id', getInvoiceByID);
router.put('/invoices/:id', updateInvoice);
router.patch('/invoices/:id', updateInvoicePartial);
router.delete('/invoices/:id', deleteInvoice);

export default router;