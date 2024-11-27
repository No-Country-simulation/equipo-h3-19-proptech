import User from '../database/models/user.model';

export const getAllUsers = async () => {
  return await User.findAll();
};

export const createUser = async (name: string, email: string) => {
  return await User.create({ name, email });
};

export const getUserById = async (id: number) => {
  return await User.findByPk(id);
};

export const updateUser = async (id: number, data: Partial<{ name: string; email: string }>) => {
  const user = await User.findByPk(id);
  if (!user) return null;

  return await user.update(data);
};

export const deleteUser = async (id: number) => {
  const user = await User.findByPk(id);
  if (!user) return null;

  await user.destroy();
  return user;
};
