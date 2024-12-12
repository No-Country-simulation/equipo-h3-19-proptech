import { Router } from 'express';
import {
  getUsers,
  createUserHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers);
router.post('/', createUserHandler);
router.get('/:id', getUserHandler);
router.put('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

export default router;
