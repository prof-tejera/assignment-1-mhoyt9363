import { useState, useEffect } from "react";
import convertSeconds from "../../utils/helpers";
import Buttons from "../generic/Buttons";
import ElapsedTime from "../generic/ElapsedTime";

const Stopwatch = ({ timeCap }) => {
  const [seconds, setSeconds] = useState(0);
  const [cap, setCap] = useState(timeCap);
  const [isActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const [isDone, setDone] = useState(false);

  useEffect(() => {
    let intervalID = null;
  
    if (isActive && (isPaused === false) && (isDone === false)) {
      intervalID = setInterval(() => {
        setSeconds(seconds + 1);
        if ((seconds + 1) >= cap) {
            setDone(true);
        }
      }, 1000);
    } else {
      clearInterval(intervalID);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [isActive, isPaused, isDone, seconds]);

  function doStart() {
    setActive(true);
    setDone(false);
  }
  function doPauseResume() {
    setPaused(!isPaused);
  }
  function doFastForward() {
    setSeconds(timeCap);
    setActive(false);
    setDone(true);
    setPaused(false);
  }

  function doReset() {
    setSeconds(0);
    setActive(false);
    setPaused(false);
    setDone(false);
  }
  
  const capStyle = {
    textAlign: "center",
    horzontalAlign: "center",
    fontSize: 10,
  }
  return (
    <div>
        <ElapsedTime label="" seconds={seconds} />
        <Buttons isActive = {isActive} isDone = {isDone} isPaused={isPaused} doStart={doStart} doPauseResume={doPauseResume} doFastForward={doFastForward} doReset={doReset} />
        <div style={capStyle}>Time cap: {convertSeconds({ seconds: cap })}</div>
    </div>
  );
};

export default Stopwatch;
