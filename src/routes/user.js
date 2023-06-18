import express from 'express';
import {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
} from '../controllers/users';

const router = express.Router();

router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.get('/users', getAllUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/users/login', loginUser);

export default router;