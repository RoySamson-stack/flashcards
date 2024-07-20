const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token is not valid' });
    }
    req.userId = decoded.userId;
    next();
  });
};

module.exports = { checkAuth };
