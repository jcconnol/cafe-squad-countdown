import React, { useEffect, useState } from 'react';

const GifShower = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinutes = now.getMinutes();
      const currentDay = now.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

      const isWeekday = currentDay >= 1 && currentDay <= 5; // Monday to Friday
      const isInTimeRange = (
        (currentHour === 12 && currentMinutes >= 45) || 
        (currentHour === 13 && currentMinutes < 15)
      );

      setIsVisible(isWeekday && isInTimeRange);
    };

    const intervalId = setInterval(checkTime, 1000); // check every second
    checkTime();

    return () => clearInterval(intervalId);
  }, []);

    return (
        <div 
            className='gif-shower-container' 
            style={{ display: isVisible ? 'block' : 'none' }}>
            
            <img src="/misc/walking-gifs/koala-punch.gif" alt="my-gif" />
        </div>
    );
}

export default GifShower;

