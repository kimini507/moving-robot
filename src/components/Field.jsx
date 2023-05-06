import classes from "./Field.module.css";

import Tile from "./Tile";
import Robot from "./Robot";

function Field({
  rows = 5,
  columns = 5,
  robotPosition,
  robotDirection,
  tileSize = 50,
}) {
  let field = [];
  for (let i = 0; i < rows; i++) {
    let fieldRow = [];
    for (let j = 0; j < columns; j++) {
      fieldRow.push(
        <Tile size={tileSize} key={`${i}-${j}`}>
          {i == robotPosition[0] && j == robotPosition[1] && (
            <Robot size={tileSize / 1.5} direction={robotDirection} />
          )}
        </Tile>
      );
    }
    field.push(fieldRow);
  }

  return (
    <>
      <div className={classes.field}>
        {field.map((f, i) => (
          <div className={classes.fieldRow} key={i}>
            {f}
          </div>
        ))}
      </div>
    </>
  );
}

export default Field;
