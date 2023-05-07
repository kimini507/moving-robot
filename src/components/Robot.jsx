import classes from "./Robot.module.css";

function Robot({ size = 50, directionDegrees }) {
  let robotStyle = {
    width: size,
    height: size,
    transform: `rotate(${directionDegrees}deg)`,
    transition: "0.2s ease",
  };

  return <div style={robotStyle} className={classes.robot}></div>;
}

export default Robot;
