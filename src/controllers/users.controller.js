import {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from '#services/users.service.js';
import logger from '#config/logger.js';

export const listUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    logger.error('Error in listUsers:', error);
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await getUserById(Number(req.params.id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    logger.error('Error in getUser:', error);
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await updateUserById(Number(req.params.id), req.body);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User updated', user: updatedUser });
  } catch (error) {
    logger.error('Error in updateUser:', error);
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await deleteUserById(Number(req.params.id));
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted', user: deletedUser });
  } catch (error) {
    logger.error('Error in deleteUser:', error);
    next(error);
  }
};
