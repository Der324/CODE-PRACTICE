// 17c-exercise Speed represents how fast a car is going.
export default class Car1
{
  brand;
  model;

  constructor(brand, model) 
  {
    this.brand = brand;
    this.model = model;
    this.speed = 0; // starts at 0
  }

  go() {
    if (this.speed < 200) {
      this.speed += 5;

      // Prevents going over 200
      if (this.speed > 200) {
        this.speed = 200;
      }
    }
  }

  brake() {
    if (this.speed > 0) {
      this.speed -= 5;

      // Prevents going below 0
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  }

  
  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`);
  }
}