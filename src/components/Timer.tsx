import React from "react";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";
import Alert from "./Alert";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}
export const Timer: React.FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = React.useState(300);
  const [whiteTime, setWhiteTime] = React.useState(300);

  const timer = React.useRef<null | ReturnType<typeof setInterval>>(null);

  React.useEffect(() => {
    startTimer();
  }, [currentPlayer]);
  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decremenWhiteTimer
        : decrementBlackTimer;

    timer.current = setInterval(callback, 1000);
  }
  function decrementBlackTimer() {
    setBlackTime((prev) => (prev != 0 ? prev - 1 : (prev = 0)));
  }
  function decremenWhiteTimer() {
    setWhiteTime((prev) => (prev != 0 ? prev - 1 : (prev = 0)));
  }

  const handleRestart = () => {
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  };
  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart Game</button>
      </div>
      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
      {whiteTime === 0 && <Alert restart={handleRestart} white={whiteTime} />}
      {blackTime === 0 && <Alert restart={handleRestart} white={whiteTime} />}
    </div>
  );
};
