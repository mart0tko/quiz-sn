import React, { useState, useEffect } from "react";
import { MessageStrip } from "@ui5/webcomponents-react";
import "./Timer.scss";

const nMinuteSeconds = 60;
const nSecondInMiliseconds = 1000;

const convertMinutesToMiliseconds = (minute) =>
  minute * nMinuteSeconds * nSecondInMiliseconds;

const convertMilisecondsToHour = (miliseconds) => new Date(miliseconds).toISOString().slice(11, -5);

export default function Timer({ minutes, onTimeOut }) {
  let [timerCount, setTimerCount] = useState(
    convertMinutesToMiliseconds(minutes)
  );
  let interval;

  useEffect(() => {
    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      if (timerCount === 0 && interval) {
        onTimeOut();
        clearInterval(interval);
      }

      setTimerCount((timerCount -= nSecondInMiliseconds));
    }, nSecondInMiliseconds);
  }, []);

  return (
    <>
      <MessageStrip design="Information" hide-close-button>
        Time left: {convertMilisecondsToHour(timerCount)}
      </MessageStrip>
    </>
  );
}
