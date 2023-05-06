import { useState } from "react";

import Field from "../components/Field";
import classes from "./Game.module.css";
import Rotation from "../constants/rotations";
import Direction from "../constants/directions";

function Game() {
  const [robotPosition, setRobotPosition] = useState([2, 2]);
  const [robotDirection, setRobotDirection] = useState(Direction.NORTH);

  function rotateRobot(rotation = Rotation.LEFT) {
    setRobotDirection((robotDirection + rotation) % 4);
  }

  return (
    <div className={classes.game}>
      <div className={classes.main}>
        <Field robotPosition={robotPosition} robotDirection={robotDirection} />
        <div className={classes.gameControls}>
          <button className={classes.gameControlButton}>Move</button>
          <button
            className={classes.gameControlButton}
            onClick={() => rotateRobot(Rotation.LEFT)}
          >
            Left
          </button>
          <button
            className={classes.gameControlButton}
            onClick={() => rotateRobot(Rotation.RIGHT)}
          >
            Right
          </button>
          <button className={classes.gameControlButton}>Report</button>
        </div>
      </div>
      <div className={classes.gameLogsContainer}>
        <div className={classes.gameLogsHeader}>Game Logs</div>
        <div className={classes.gameLogs}>The game has started!</div>
      </div>
    </div>
  );
}

export default Game;
