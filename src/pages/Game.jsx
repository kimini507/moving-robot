import { useState } from "react";

import Field from "../components/Field";
import classes from "./Game.module.css";

function Game() {
  const [robotPosition, setRobotPosition] = useState([2, 2]);

  return (
    <div className={classes.game}>
      <div className={classes.main}>
        <Field robotPosition={robotPosition} />
        <div className={classes.gameControls}>
          <button className={classes.gameControlButton}>Move</button>
          <button className={classes.gameControlButton}>Left</button>
          <button className={classes.gameControlButton}>Right</button>
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
