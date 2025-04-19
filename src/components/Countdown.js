import React, { useState, useEffect } from 'react';
import './countdown.css'; // This will contain the CSS we created earlier

const Countdown = () => {
  const calculateTimeLeft = () => {
    // NEET 2025 exam date (May 4, 2025)
    const targetDate = new Date('2025-05-04T13:59:59');
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

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
  const [isClient, setIsClient] = useState(false);

  // Animation for changing numbers
  useEffect(() => {
    setIsClient(true); // To handle SSR hydration mismatch
    const elements = ['days', 'hours', 'minutes', 'seconds'];
    
    elements.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('changing');
        setTimeout(() => el.classList.remove('changing'), 300);
      }
    });
  }, [timeLeft]);

  // Update countdown every second
  useEffect(() => {
    if (!isClient) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [isClient]);

  // Format numbers to always show 2 digits (e.g., 05 instead of 5)
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="countdown-section">
      <h1 className="countdown-title">NEET 2025 COUNTDOWN</h1>
      <div className="countdown-container">
        <div className="countdown-box">
          <div id="days" className="countdown-value">
            {isClient ? formatNumber(timeLeft.days) : '00'}
          </div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-box">
          <div id="hours" className="countdown-value">
            {isClient ? formatNumber(timeLeft.hours) : '00'}
          </div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-box">
          <div id="minutes" className="countdown-value">
            {isClient ? formatNumber(timeLeft.minutes) : '00'}
          </div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-box">
          <div id="seconds" className="countdown-value">
            {isClient ? formatNumber(timeLeft.seconds) : '00'}
          </div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;