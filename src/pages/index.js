import CountdownTimer from '../components/CountdownTimer';
import { useState } from 'react';

export default function Home() {
  const [countdownDate, setCountdownDate] = useState(new Date('2023-05-01T00:00:00'));
  const handleDateChange = (event) => {
    setCountdownDate(new Date(event.target.value));
  };
  return (
    <div className='container mx-auto'>
    <div className='grid h-screen place-items-center'>
      <label htmlFor="countdown-date">Countdown date:</label>
      <input type="datetime-local" id="countdown-date" value={countdownDate.toISOString().slice(0, -8)} onChange={handleDateChange} />
      <CountdownTimer datetime={countdownDate} />
    </div>
    </div>
  );
}
