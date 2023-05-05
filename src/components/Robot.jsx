import classes from "./Robot.module.css";

function Robot({ size = 50 }) {
  let robotStyle = {
    width: size,
    height: size,
  };

  return <div style={robotStyle} className={classes.robot}></div>;
}

export default Robot;
