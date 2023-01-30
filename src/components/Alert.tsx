import React from "react";
import "../App.css";

interface AlertProps {
  restart: () => void;
  white: number;
}
const Alert: React.FC<AlertProps> = ({ restart, white }) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <p>{white == 0 ? "Белые" : "Черные"} проиграли</p>{" "}
        <button onClick={restart}>Restart Game</button>
      </div>
    </div>
  );
};
export default Alert;
