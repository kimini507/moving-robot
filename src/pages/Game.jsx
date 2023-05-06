import { useState } from "react";

import Field from "../components/Field";
import classes from "./Game.module.css";
import Rotation from "../constants/rotations";
import Direction from "../constants/directions";

function Game() {
  const [robotPosition, setRobotPosition] = useState([2, 2]);
  const [robotDirection, setRobotDirection] = useState(Direction.NORTH);
  const [rows, columns] = [5, 5];
  const [gameLogs, setGameLogs] = useState(["The game has started!"]);

  function rotateRobot(rotation = Rotation.LEFT) {
    setRobotDirection((4 + robotDirection + rotation) % 4);
  }

  function moveRobot() {
    let [x, y] = robotPosition;

    switch (robotDirection) {
      case Direction.NORTH:
        x--;
        break;
      case Direction.EAST:
        y++;
        break;
      case Direction.SOUTH:
        x++;
        break;
      case Direction.WEST:
        y--;
      default:
    }

    if (x >= 0 && y >= 0 && x < rows && y < columns) {
      setRobotPosition([x, y]);
    }
  }

  function reportRobot() {
    setGameLogs([...gameLogs, generateReport()]);
  }

  function generateReport() {
    return `Robot is at (${robotPosition[0]}, ${
      robotPosition[1]
    }) and is facing ${Direction.humanize(robotDirection)}`;
  }

  return (
    <div className={classes.game}>
      <div className={classes.main}>
        <Field
          robotPosition={robotPosition}
          robotDirection={robotDirection}
          rows={rows}
          columns={columns}
        />
        <div className={classes.gameControls}>
          <button className={classes.gameControlButton} onClick={moveRobot}>
            Move
          </button>
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
          <button className={classes.gameControlButton} onClick={reportRobot}>
            Report
          </button>
        </div>
      </div>
      <div className={classes.gameLogsContainer}>
        <div className={classes.gameLogsHeader}>Game Logs</div>
        <div className={classes.gameLogs}>
          {gameLogs.map((v, i) => (
            <div key={i}>{v}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
