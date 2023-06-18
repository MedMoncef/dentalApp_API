import express from 'express';
import {
  getAllProducts,
  createProduct,
  getProductByID,
  updateProduct,
  updateProductPartial,
  deleteProduct,
} from '../controllers/products';

const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products', createProduct);
router.get('/products/:id', getProductByID);
router.put('/products/:id', updateProduct);
router.patch('/products/:id', updateProductPartial);
router.delete('/products/:id', deleteProduct);

export default router;