// backend/server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const devicesRouter = require('./routes/devices');
const { Pool } = require('pg');
const authRouter = require('./routes/auth');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Подключение к БД
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Middleware
app.use(express.json());

// Роутеры
app.use('/api', devicesRouter);
app.use('/api/auth', authRouter);

// Socket.IO
io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('new-pulse', (data) => {
    io.emit('pulse-update', data);
  });
});

// Запуск сервера
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
