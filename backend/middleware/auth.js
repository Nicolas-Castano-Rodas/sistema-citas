const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // El token suele venir en el header "Authorization: Bearer <token>"
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No hay token, autorización denegada' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user; // Guarda el ID del usuario en la request
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token no válido' });
    }
};