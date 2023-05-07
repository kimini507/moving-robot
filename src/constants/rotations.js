class Rotation {
  static LEFT = new Rotation("Left");
  static RIGHT = new Rotation("Right");

  constructor(name) {
    this.name = name;
  }

  degrees() {
    switch (this) {
      case Rotation.LEFT:
        return -90;
      case Rotation.RIGHT:
        return 90;
      default:
        return 0;
    }
  }
}

export default Rotation;
