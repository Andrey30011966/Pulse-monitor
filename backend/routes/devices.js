// backend/routes/devices.js
const express = require('express');
const { pool } = require('../models/db'); // Подключение к БД
const authenticateUser = require('../middleware/authMiddleware'); // Импорт middleware

const router = express.Router();

// Получить список зарегистрированных устройств (только для авторизованных пользователей)
router.get('/devices', authenticateUser, async (req, res) => {
  try {
    // Проверка роли пользователя (например, только администраторы могут просматривать устройства)
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    // Получаем список устройств (пользователи с ролью 'user')
    const { rows } = await pool.query(
      'SELECT id, username, device_id, name FROM users WHERE role = $1',
      ['user']
    );

    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Другие роуты (например, добавление устройства)
router.post('/add-device', authenticateUser, async (req, res) => {
  try {
    // Проверка роли (только администраторы могут добавлять устройства)
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const { deviceId, name } = req.body;

    // Проверка наличия обязательных полей
    if (!deviceId || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Сохраняем устройство в БД (например, обновляем существующую запись)
    await pool.query(
      'UPDATE users SET device_id = $1, name = $2 WHERE username = $3',
      [deviceId, name, req.user.username]
    );

    res.status(200).json({ message: 'Device added/updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
