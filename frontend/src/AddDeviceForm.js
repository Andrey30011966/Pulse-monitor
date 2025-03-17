// src/AddDeviceForm.js
import React from 'react';
import axios from 'axios';

function AddDeviceForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const deviceId = e.target.deviceId.value;
    const name = e.target.name.value;
    const role = e.target.role.value;

    try {
      await axios.post('http://localhost:3001/api/add-device', {
        deviceId,
        name,
        role,
      });
      alert('Device added!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="deviceId" placeholder="Device ID" required />
      <input type="text" name="name" placeholder="Name" required />
      <select name="role">
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button type="submit">Add Device</button>
    </form>
  );
}

export default AddDeviceForm;
