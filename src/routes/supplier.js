import express from 'express';
import {
  getAllSuppliers,
  createSupplier,
  getSupplierByID,
  updateSupplier,
  updateSupplierPartial,
  deleteSupplier,
} from '../controllers/suppliers';

const router = express.Router();

router.get('/suppliers', getAllSuppliers);
router.post('/suppliers', createSupplier);
router.get('/suppliers/:id', getSupplierByID);
router.put('/suppliers/:id', updateSupplier);
router.patch('/suppliers/:id', updateSupplierPartial);
router.delete('/suppliers/:id', deleteSupplier);

export default router;