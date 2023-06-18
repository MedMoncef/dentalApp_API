import express from 'express';
import {
  getAllProcedures,
  createProcedure,
  getProcedureByID,
  updateProcedure,
  updateProcedurePartial,
  deleteProcedure,
} from '../controllers/procedures';

const router = express.Router();

router.get('/procedures', getAllProcedures);
router.post('/procedures', createProcedure);
router.get('/procedures/:id', getProcedureByID);
router.put('/procedures/:id', updateProcedure);
router.patch('/procedures/:id', updateProcedurePartial);
router.delete('/procedures/:id', deleteProcedure);

export default router;