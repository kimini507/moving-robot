import classes from "./Robot.module.css";
import Direction from "../constants/directions";

function Robot({ size = 50, direction = Direction.NORTH }) {
  let robotStyle = {
    width: size,
    height: size,
    transform: `rotate(${direction * 90}deg)`,
  };

  return <div style={robotStyle} className={classes.robot}></div>;
}

export default Robot;
