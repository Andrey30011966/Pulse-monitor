// src/DeviceList.js
import React, { useEffect, useState } from 'react';

function DeviceList() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/devices');
        const data = await response.json();
        setDevices(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDevices();
  }, []);

  return (
    <div>
      <h2>Registered Devices</h2>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            {device.username}: {device.device_id} ({device.name})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeviceList;
