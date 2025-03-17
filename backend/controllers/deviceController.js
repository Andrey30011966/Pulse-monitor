// backend/controllers/deviceController.js
const pool = require('../models/db');

exports.addDevice = async (req, res) => {
  const { deviceId, name, role } = req.body;
  try {
    await pool.query(
      'INSERT INTO users (device_id, name, role) VALUES ($1, $2, $3)',
      [deviceId, name, role]
    );
    res.status(200).json({ message: 'Device added' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
