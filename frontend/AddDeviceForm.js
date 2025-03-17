// frontend/components/AddDeviceForm.js
import axios from 'axios';

const handleAddDevice = async (deviceId, name, role) => {
  try {
    await axios.post('http://localhost:3001/api/add-device', {
      deviceId,
      name,
      role,
    });
    alert('Device added!');
  } catch (error) {
    console.error('Error:', error.message);
  }
};
