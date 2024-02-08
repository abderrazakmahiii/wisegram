import jwt from 'jsonwebtoken'; 

export const isAuthenticated = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = req.headers.authorization.split(' ')[1]; 

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken; 
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const isAdmin = (req, res, next) => {
  if (!isAuthenticated(req, res, next)) return;

  if (!req.user.isAdmin) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  next();
};