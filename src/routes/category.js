import express from 'express';
import {
  getAllCategories,
  createCategory,
  getCategoryByID,
  updateCategory,
  updateCategoryPartial,
  deleteCategory,
} from '../controllers/categories';

const router = express.Router();

router.get('/categories', getAllCategories);
router.post('/categories', createCategory);
router.get('/categories/:id', getCategoryByID);
router.put('/categories/:id', updateCategory);
router.patch('/categories/:id', updateCategoryPartial);
router.delete('/categories/:id', deleteCategory);

export default router;