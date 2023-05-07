const Rotation = {
  LEFT: Symbol("Left"),
  RIGHT: Symbol("Right"),

  degrees: (rotation) => {
    switch (rotation) {
      case Rotation.LEFT:
        return -90;
      case Rotation.RIGHT:
        return 90;
      default:
        return 0;
    }
  },
};

export default Rotation;
