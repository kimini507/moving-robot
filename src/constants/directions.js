class Direction {
  static NORTH = new Direction("North");
  static EAST = new Direction("East");
  static SOUTH = new Direction("South");
  static WEST = new Direction("West");

  constructor(name) {
    this.name = Symbol(name);
  }

  static fromDegrees(degrees) {
    let normalized = degrees % 360;
    if (normalized < 0) {
      normalized += 360;
    }

    switch (normalized) {
      case 0:
        return Direction.NORTH;
      case 90:
        return Direction.EAST;
      case 180:
        return Direction.SOUTH;
      case 270:
        return Direction.WEST;
      default:
    }
  }

  toString() {
    return this.name.description;
  }

  degrees() {
    switch (this) {
      case Direction.NORTH:
        return 0;
      case Direction.EAST:
        return 90;
      case Direction.SOUTH:
        return 180;
      case Direction.WEST:
        return 270;
    }
  }
}

export default Direction;
