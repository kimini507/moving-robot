import { useState } from "react";

import Field from "../components/Field";
import classes from "./Game.module.css";
import Rotation from "../constants/rotations";
import Direction from "../constants/directions";
import LogPanel from "../components/LogPanel";

function Game() {
  const [robotPosition, setRobotPosition] = useState([2, 2]);
  const [robotDirectionDegrees, setRobotDirectionDegrees] = useState(0);
  const [rows, columns] = [5, 5];
  const [gameLogs, setGameLogs] = useState(["The game has started!"]);

  function rotateRobot(rotation = Rotation.LEFT) {
    setRobotDirectionDegrees(
      robotDirectionDegrees + Rotation.degrees(rotation)
    );
  }

  function moveRobot() {
    let [x, y] = robotPosition;
    const direction = Direction.fromDegrees(robotDirectionDegrees);
    switch (direction) {
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
    }) and is facing ${Direction.fromDegrees(
      robotDirectionDegrees
    ).toString()}`;
  }

  return (
    <div className={classes.game}>
      <div className={classes.main}>
        <Field
          robotPosition={robotPosition}
          robotDirectionDegrees={robotDirectionDegrees}
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
      <LogPanel logs={gameLogs} header="Game Logs" />
    </div>
  );
}

export default Game;
