import jwt from 'jsonwebtoken';

export function signJwt(user) {
  return jwt.sign({ id: user.id, email: user.emails[0].value }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });
}

export function verifyJwt(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}