// src/App.js
import React, { useState, useEffect } from 'react'; // Добавьте useState и useEffect
import io from 'socket.io-client';
import RegistrationForm from './RegistrationForm';
import DeviceList from './DeviceList';

const socket = io('http://localhost:3001');

function App() {
  const [pulses, setPulses] = useState({}); // Теперь useState импортирован

  useEffect(() => {
    socket.on('pulse-update', (data) => {
      setPulses(prev => ({ ...prev, [data.deviceId]: data.value }));
    });

    return () => {
      socket.off('pulse-update');
    };
  }, []); // useEffect теперь корректно работает

  return (
    <div>
      <h1>Pulse Monitor</h1>
      <RegistrationForm />
      <DeviceList />
      {Object.entries(pulses).map(([id, value]) => (
        <div key={id}>
          Device {id}: {value} BPM
        </div>
      ))}
    </div>
  );
}

export default App;
