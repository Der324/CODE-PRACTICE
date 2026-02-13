import Car5 from './car5.js';
import Car7 from './car7.js';

export default class RaceCar extends Car7 {
  constructor(brand, model, acceleration) {
    super(brand, model)
    this.acceleration = acceleration;
  }

  go() {
    this.speed = Math.min(this.speed + this.acceleration, 300);

    // Property #speed is not accessible outside class Car7 because
    // it has a private identifier
    //this.#speed += this.acceleration; 
  }

  openTrunk() {
    console.log("Race cars do not have a trunk.");
  }

  closeTrunk() {
    console.log("Race cars do not have a trunk.");
  }
}