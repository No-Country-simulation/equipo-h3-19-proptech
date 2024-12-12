import { NextFunction, Request, Response } from 'express';
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
} from '../services/user.service';

//#region OBTENER LISTA
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const [error, users] = await getAllUsers();
  if (error) return res.status(400).json({error})
  else res.json(users);
};
//# endregion

//#region CREAR USUARIO
export const createUserHandler = async (req: Request, res: Response, next: NextFunction) => {
  const { data } = req.body;
  const [error, user] = await createUser(data);
  if (error) return next(error)
  else res.status(201).json(user);
};
//# endregion

//#region OBTENER USUARIO
export const getUserHandler = async (req: Request, res: Response, next: NextFunction) => {
  const { data } = req.body;
  const [error, user] = await getUser(data);
  if (error) return res.status(400).json({error})
  else res.json(user);
};
//# endregion

//#region MODIF USUARIO
export const updateUserHandler = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const [error, user] = await updateUser(id, req.body);
  if (error) return next(error)
  else return res.json(user);
};
//# endregion

//#region BORRAR USUARIO
export const deleteUserHandler = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const error = await deleteUser(id);
  if (error) return next(error)
  else return res.json({ message: 'Usuario borrado exitosamente.' });
};
//# endregion