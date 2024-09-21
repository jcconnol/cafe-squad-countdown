import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimeDisplay = styled.div`
  font-size: 4rem;
  margin: 20px;
`;

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextTarget = new Date();
      nextTarget.setHours(13, 0, 0, 0); // 1:00 PM

      // If the time is between 1:00 PM and 1:15 PM
      const fifteenMinutesAfter = new Date(nextTarget);
      fifteenMinutesAfter.setMinutes(fifteenMinutesAfter.getMinutes() + 15);

      if (now >= nextTarget && now < fifteenMinutesAfter) {
        setTimeLeft('Cafe squad is happening now');
        return;
      }

      // If the current time is after 1:15 PM, set the target to the next day
      if (now >= fifteenMinutesAfter) {
        nextTarget.setDate(nextTarget.getDate() + 1);
      }

      const timeDifference = nextTarget - now;

      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    };

    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <TimeDisplay>{timeLeft}</TimeDisplay>;
};

export default Countdown;
