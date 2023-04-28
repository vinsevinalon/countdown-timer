import { useState, useEffect } from 'react';

const CountdownTimer = ({ datetime }) => {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = new Date(datetime) - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        setRemainingTime(null);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setRemainingTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [datetime]);

  const handleStartClick = () => {
    const now = new Date();
    const difference = new Date(datetime) - now;

  if (difference > 0) {
    // Start the countdown only if the difference is greater than 0
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = new Date(datetime) - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        setRemainingTime(null);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setRemainingTime({ days, hours, minutes, seconds });
      }
    }, 1000);
  } else {
    // The countdown date is in the past, so set the remaining time to null
    setRemainingTime(null);
  }
  };

  return (
    <div>
      <div>
        {remainingTime ? (
          <>
            <div>{remainingTime.days} days</div>
            <div>{remainingTime.hours} hours</div>
            <div>{remainingTime.minutes} minutes</div>
            <div>{remainingTime.seconds} seconds</div>
          </>
        ) : (
          <div>Countdown ended!</div>
        )}
      </div>
      <button onClick={handleStartClick}>Start countdown</button>
    </div>
  );
};

export default CountdownTimer;