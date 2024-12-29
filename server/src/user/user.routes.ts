import { isAuthenticated } from './middleware';
import { Router } from 'express';
import {
  getUsers,
  createUserHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from './user.controller';

const router = Router();

router.get('/', isAuthenticated, getUsers);
router.post('/', isAuthenticated, createUserHandler);
router.get('/:id', isAuthenticated, getUserHandler);
router.put('/:id', isAuthenticated, updateUserHandler);
router.delete('/:id', isAuthenticated, deleteUserHandler);

export default router;
