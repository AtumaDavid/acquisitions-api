import express from 'express';
import {
  listUsers,
  getUser,
  updateUser,
  deleteUser,
} from '#controllers/users.controller.js';

const router = express.Router();

router.get('/', listUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
