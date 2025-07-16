import express from 'express';
import passport from '../auth/passport.js';
import { signJwt } from '../auth/jwt.js';

const router = express.Router();

// Start Google OAuth
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
  session: false
}));

// Handle callback from Google
router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/login',
  session: false
}), (req, res) => {
  const token = signJwt(req.user);

  // You can redirect and set the token as a cookie or return it directly
  res.redirect(`http://localhost:3000/?token=${token}`);
});

export default router;