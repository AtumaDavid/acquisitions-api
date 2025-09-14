import { signup } from '#controllers/auth.controller.js';
import express from 'express';

const router = express.Router();

router.post('/sign-up', signup);

router.post('/sign-in', (req, res) => {
  // Handle user sign-in
  res.send('User signed in');
});

router.post('/sign-out', (req, res) => {
  // Handle user sign-out
  res.send('User signed out');
});

export default router;
