import { useState, useEffect } from "react";
import prayer from "../../Assets/Audios/infiniprayer.mp3";
import title from "../../Assets/Images/infiminuteImgs/infiniminutetitle.png";
import Budha from "../../Assets/Images/infiminuteImgs/infiniBudha.png";
import "./Timer.css";
function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date().getTime()); //getting the current time in milliseconds
  const [targetTime, settargetTime] = useState(
    new Date().setHours(17, 26, 0, 0)
  ); //setting the target time using setHours(hours,minutes,sec,milliseconds)
  const songend = new Date().setHours(11, 11, 0, 0);
  const silence = new Date().setHours(11, 12, 0, 0);
  const [alertText, setAlertText] = useState(false);
  const leftTime = targetTime - currentTime; // calculating  remaining time to reach the target time in milliseconds
  //converting the time in milliseconds into time format
  const seconds = 1000; //ms
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const remainingHours = Math.floor((leftTime % days) / hours);
  const remainingMinutes = Math.floor((leftTime % hours) / minutes);
  const remainingSeconds = Math.floor((leftTime % minutes) / seconds);
  // calling play function before 1min 4 sec to reach the target time
  useEffect(() => {
    if (
      remainingHours === 0 &&
      remainingMinutes === 1 &&
      remainingSeconds === 4
    ) {
      play();
    }
    // if target time passes the target time will reset to next date as target time
    if (currentTime >= targetTime) {
      const nexttargetTime = new Date(targetTime);
      nexttargetTime.setDate(nexttargetTime.getDate() + 1);
      settargetTime(nexttargetTime.getTime());
    }
    // after complete the playing song 1min silence time
    if (currentTime >= songend && currentTime <= silence) {
      setAlertText(true);
    } else {
      setAlertText(false);
    }
    const timer = setTimeout(() => setCurrentTime(new Date().getTime()), 1000);
    return () => clearTimeout(timer);
  }, [currentTime, targetTime]);
  // prayer will start when the current time reaches the target time
  const play = () => {
    new Audio(prayer).play();
  };
  return (
    <div className="Timer_body">
      <div className="Timer_infiniminute_content">
        <div>
        <img className="Timer_infiniminute_title" src={title} alt="title" />
        </div>  
        <div>
          {alertText ? (
            <h1 className="Timer_text">Close Your Eyes</h1>
          ) : (
            <img className="Timer_budha_img" src={Budha} alt="budha" />
          )}
        </div>
        <div>
          <h2 className="Timer_heading">Time until next infiniminute!</h2>
        </div>
        <div>
          <div className="timestamp">
            <div className="Timer_countdown">
              {remainingHours < 10 ? (
                <div className="Timer_infiniminute_timer">
                  0{remainingHours}
                </div>
              ) : (
                <div className="Timer_infiniminute_timer">{remainingHours}</div>
              )}
              <div>HOURS</div>
            </div>
            <div className="Timer_countdown">
              {remainingMinutes < 10 ? (
                <div className="Timer_infiniminute_timer">
                  0{remainingMinutes}
                </div>
              ) : (
                <div className="Timer_infiniminute_timer">
                  {remainingMinutes}
                </div>
              )}
              <div>MIN</div>
            </div>
            <div className="Timer_countdown">
              {remainingSeconds < 10 ? (
                <div className="Timer_infiniminute_timer">
                  0{remainingSeconds}
                </div>
              ) : (
                <div className="Timer_infiniminute_timer">
                  {remainingSeconds}
                </div>
              )}
              <div>SEC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
