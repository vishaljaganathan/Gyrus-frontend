import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file for styling

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-05-04T13:59:59'); // Set your target date here
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="countdown-section">
      <div className="countdown-title">NEET 2025 COUNTDOWN</div>
      <div className="countdown-container">
        <div className="countdown-box">
          <div id="days" className="countdown-value">{timeLeft.days || 0}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-box">
          <div id="hours" className="countdown-value">{timeLeft.hours || 0}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-box">
          <div id="minutes" className="countdown-value">{timeLeft.minutes || 0}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-box">
          <div id="seconds" className="countdown-value">{timeLeft.seconds || 0}</div>
          <div className="countdown-label">Sec</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;