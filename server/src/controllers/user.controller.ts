import { NextFunction, Request, Response } from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../services/user.service";

//#region OBTENER LISTA
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const [error, users] = await getAllUsers();
  if (error) return res.status(400).json({ error });
  else res.json(users);
};
//# endregion

//#region CREAR USUARIO
export const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { data } = req.body;
  try {
    const user = await createUser(data);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
//# endregion

//#region OBTENER USUARIO
export const getUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { data } = req.body;
  const [error, user] = await getUser(data);
  if (error) return res.status(400).json({ error });
  else res.json(user);
};
//# endregion

//#region MODIF USUARIO
export const updateUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const [error, user] = await updateUser(id, req.body);
  if (error) return next(error);
  else return res.json(user);
};
//# endregion

//#region BORRAR USUARIO
export const deleteUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const error = await deleteUser(id);
  if (error) return next(error);
  else return res.json({ message: "Usuario borrado exitosamente." });
};
//# endregion
