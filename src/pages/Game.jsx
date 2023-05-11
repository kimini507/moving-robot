import { useState, useRef } from "react";

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
  const placeInputXRef = useRef();
  const placeInputYRef = useRef();

  function rotateRobot(rotation = Rotation.LEFT) {
    setRobotDirectionDegrees(robotDirectionDegrees + rotation.degrees());
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
    const [x, y] = getRobotPositionFromSouthWestOrigin();
    return `Robot is at (${x}, ${y}) and is facing ${Direction.fromDegrees(
      robotDirectionDegrees
    ).toString()}`;
  }

  function getRobotPositionFromSouthWestOrigin() {
    const [y, x] = robotPosition;
    return [x, rows - y - 1];
  }

  function placeRobot() {
    let [x, y] = [placeInputXRef.current.value, placeInputYRef.current.value];

    if (
      x === "" ||
      y === "" ||
      x < 0 ||
      y < 0 ||
      x >= columns ||
      y >= columns
    ) {
      alert(
        `You must set valid coordinates from (0, 0) to (${columns - 1}, ${
          rows - 1
        })!`
      );
      return;
    }
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
          <div className={classes.gameControlsPartition}>
            <div className={classes.labeledInput}>
              <label htmlFor="placeInputX"> X </label>
              <input
                id="placeInputX"
                type="number"
                min="0"
                max={rows - 1}
                placeholder="X"
                ref={placeInputXRef}
              />
            </div>
            <div className={classes.labeledInput}>
              <label htmlFor="placeInputY"> Y </label>
              <input
                id="placeInputY"
                type="number"
                min="0"
                max={columns - 1}
                placeholder="Y"
                ref={placeInputYRef}
              />
            </div>
            <button className={classes.gameControlButton} onClick={placeRobot}>
              Place
            </button>
          </div>
          <div className={classes.gameControlsPartition}>
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
          </div>
          <div className={classes.gameControlsPartition}>
            <button className={classes.gameControlButton} onClick={moveRobot}>
              Move
            </button>
          </div>
          <div className={classes.gameControlsPartition}>
            <button className={classes.gameControlButton} onClick={reportRobot}>
              Report
            </button>
          </div>
        </div>
      </div>
      <LogPanel logs={gameLogs} header="Game Logs" />
    </div>
  );
}

export default Game;
