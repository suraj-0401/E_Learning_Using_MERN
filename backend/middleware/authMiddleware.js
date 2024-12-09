import jwt from 'jsonwebtoken';

export const authentication = (req, res, next) => {
  const SECRET_KEY='1234567890';
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, 'SECRET_KEY', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    req.user = decoded; 
    next();
  });
};

export const authorization = (requiredRole) => {
  return (req, res, next) => {
    if (req.user?.role !== requiredRole) {
      return res.status(403).json({ message: 'Permission denied' });
    }
    next();
  };
};

