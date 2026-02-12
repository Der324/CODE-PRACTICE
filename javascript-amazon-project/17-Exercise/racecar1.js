import Car5 from './car5.js';

export default class RaceCar extends Car5 {
  constructor(brand, model, acceleration) {
    super(brand, model)
    this.acceleration = acceleration;
  }

  go() {
    this.speed = Math.min(this.speed + this.acceleration, 300);
  }

  openTrunk() {
    console.log("Race cars do not have a trunk.");
  }

  closeTrunk() {
    console.log("Race cars do not have a trunk.");
  }
}