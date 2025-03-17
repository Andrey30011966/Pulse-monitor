// backend/middleware/authMiddleware.js
const bcrypt = require('bcrypt');
const { pool } = require('../models/db');

async function authenticateUser(req, res, next) {
  const { username, password } = req.body;

  try {
    // Ищем пользователя по username
    const { rows } = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    if (!rows.length) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Проверка пароля
    const valid = await bcrypt.compare(password, rows[0].password);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Добавляем пользователя в объект запроса
    req.user = rows[0];
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = authenticateUser;
