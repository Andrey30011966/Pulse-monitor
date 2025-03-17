// backend/miband.js
const MiBand = require('node-xiaomi-miband');

async function connectToDevice() {
  const device = await MiBand.find();
  if (device) {
    await device.connect();
    const heartRate = await device.getHeartRate();
    return heartRate;
  }
}
