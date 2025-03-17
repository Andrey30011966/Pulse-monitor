// frontend/PulseMonitor.js
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function App() {
  const [pulses, setPulses] = useState({});

  useEffect(() => {
    socket.on('pulse-update', (data) => {
      setPulses(prev => ({ ...prev, [data.deviceId]: data.value }));
    });
  }, []);

  return (
    <div>
      {Object.entries(pulses).map(([id, value]) => (
        <div key={id}>
          {id}: {value} BPM
        </div>
      ))}
    </div>
  );
}
