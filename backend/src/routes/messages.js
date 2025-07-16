import express from 'express';
import { requireAuth } from '../auth/middleware.js';

const router = express.Router();

router.get('/', requireAuth, async (req, res) => {
  res.json({ message: `You are authenticated as ${req.user.email}` });
});

export default router;