import { useEffect, useState } from "react";

import "./CountDown.css";
const CountDown = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [countDownStarted, setCountDownStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (countDownStarted && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          alert("Countdown complete!");
        }

        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [countDownStarted, eventDate, timeRemaining]);

  useEffect(() => {
    if (countDownStarted) {
      document.title = eventName;
    }
  }, [countDownStarted, eventName]);

  const handleSetCountdown = () => {
    setCountDownStarted(true);
    localStorage.setItem("eventDate", eventDate);
    localStorage.setItem("eventName", eventName);
  };

  const handleStopCountdown = () => {
    setCountDownStarted(false);
    setTimeRemaining(0);
  };

  const handleResetCountdown = () => {
    setCountDownStarted(false);
    setEventDate("");
    setEventName("");
    setTimeRemaining(0);
    localStorage.removeItem("eventDate");
    localStorage.removeItem("eventName");
  };
  // date formatt

  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };
  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className="countdown-display">
        <div className="countdown-value">
          {days.toString().padStart(2, "0")}{" "}
          <span className="text-md">days</span>
        </div>
        <div className="countdown-value">
          {hours.toString().padStart(2, "0")} <span> hours</span>
        </div>
        <div className="countdown-value">
          {minutes.toString().padStart(2, "0")} <span>minutes</span>
        </div>
        <div className="countdown-value">
          {seconds.toString().padStart(2, "0")} <span>seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="container max-w-full h-[600px] flex flex-col items-center justify-center main">
      <h1 className="text-3xl font-bold font">We are coming soon</h1>
      <h2 className="text-3xl font-bold font">
        {countDownStarted ? eventName : "Countdown Timer"}
      </h2>
      <p className="countdown-date text-lg">
        {countDownStarted && formatDate(eventDate)}
      </p>

      {!countDownStarted ? (
        <form className="countdown-form">
          <label htmlFor="title">Event Name</label>
          <input
            name="title"
            type="text"
            placeholder="Enter event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          <label htmlFor="date-picker">Event Date</label>
          <input
            name="date-picker"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            onClick={(e) => (e.target.type = "date")}
          />
          <button onClick={handleSetCountdown} className="btn">
            Start Countdown
          </button>
        </form>
      ) : (
        <>
          {formatTime(timeRemaining)}
          <div className="control-buttons">
            <button onClick={handleStopCountdown} className="btn">
              Stop
            </button>
            <button onClick={handleResetCountdown} className="btn">
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default CountDown;
