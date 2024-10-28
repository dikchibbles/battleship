class Ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.positions = [];
    this.hit = [];
    this.destroyed = false;
  }
  checkForDamage(target) {}
  isDestroyed() {
    return this.destroyed;
  }
  setPositions(locations) {
    if (locations.length === this.size) {
      this.positions = locations;
    } else {
      throw new Error(
        `Invalid number of locations. Expected ${this.size}, but got ${locations.length}`
      );
    }
  }
}
