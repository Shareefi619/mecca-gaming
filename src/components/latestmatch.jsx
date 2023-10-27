import { useEffect, useState } from "react";
import { clubs, clubs2 } from "../assets/images";

const Latestmatch = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function getTimeRemaining() {
    // Calculate the time remaining from the current date to the target date
    const targetDate = new Date("2023-10-20T15:00:00"); // Set your target date and time here
    const now = new Date();

    const totalSeconds = Math.floor((targetDate - now) / 1000);

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="rts-latest-match">
      <div className="container">
        <div className="latest-match-inner">
          <div className="club-area">
            <div className="club-logo">
              <img src={clubs} alt="" />
            </div>
            <div className="content">
              <h3 className="club-text">
                Mecca of Gaming F.C <br />
                CHAMPIONS DI CLUB
              </h3>
              <span className="match-type">SEMI FINAL</span>
            </div>
          </div>
          <div className="match-countdown-area">
            <div className="countdown">
              <div className="countdown-el days-c">
                <span className="value" id="days">
                  {timeRemaining.days}
                </span>
              </div>
              <span className="letter">D</span>
              <div className="countdown-el hours-c">
                <span className="value" id="hours">
                  {timeRemaining.hours}
                </span>
              </div>
              <span className="letter">H</span>
              <div className="countdown-el mins-c">
                <span className="value" id="mins">
                  {timeRemaining.minutes}
                </span>
              </div>
              <span className="letter">M</span>
              <div className="countdown-el seconds-c">
                <span className="value" id="seconds">
                  {timeRemaining.seconds}
                </span>
              </div>
              <span className="letter">S</span>
            </div>
          </div>
          <div className="club-area">
            <div className="content text-end ml--40 mr--0">
              <h3 className="club-text">
                KINGSTER F.C <br />
                CHAMPIONS DI CLUB
              </h3>
              <span className="match-type">SEMI FINAL</span>
            </div>
            <div className="club-logo ml--40 mr--0">
              <img src={clubs2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestmatch;
