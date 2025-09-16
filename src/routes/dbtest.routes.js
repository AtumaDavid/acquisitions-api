import { db } from '#config/database.js';
import { users } from '#models/user.model.js';
import express from 'express';

const router = express.Router();

router.get('/db-test', async (req, res) => {
  try {
    // Simple query: count users
    const result = await db.select().from(users).limit(1);
    res.status(200).json({ message: 'Database connection successful', result });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Database connection failed', error: error.message });
  }
});

export default router;
