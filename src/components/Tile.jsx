import classes from "./Tile.module.css";

function Tile({ size = 50, children }) {
  let tileStyle = {
    width: size,
    height: size,
  };

  return (
    <div style={tileStyle} className={classes.tile}>
      {children}
    </div>
  );
}

export default Tile;
