import React, { useState, useEffect } from 'react';

const RandomMotto = () => {
  const [motto, setMotto] = useState('');

  useEffect(() => {
    const fetchMottos = async () => {
      try {
        const response = await fetch('./misc/mottos.txt');
        const text = await response.text();
        const mottosArray = text.split('\n').filter(line => line.trim() !== '');
        const randomIndex = Math.floor(Math.random() * mottosArray.length);
        setMotto(mottosArray[randomIndex]);
      } catch (error) {
        console.error('Error fetching mottos:', error);
        setMotto('Oops! No motto today!');
      }
    };

    fetchMottos();
  }, []);

  return (
    <div>
      <p>{motto}</p>
    </div>
  );
};

export default RandomMotto;
