// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt'); // Для хеширования паролей
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Сохраняем пользователя в БД
    await pool.query(
      'INSERT INTO users (username, password, email, role) VALUES ($1, $2, $3, $4)',
      [username, hashedPassword, email, 'user']
    );

    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
