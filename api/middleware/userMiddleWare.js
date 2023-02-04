const jwt = require('jsonwebtoken');

isAuthenticated = (req, res, next) => {
    let token = req.cookies['session id'] ?? null;
    if (!token) {
        return res.request(401);
    }
    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            return res.sendStatus(401);
        }
        req.payload = decoded;
        next();
    });
}

module.exports = { isAuthenticated }