// 17d-exercise Using speed private properties

export default class car3
{
  #brand;
  #model;

  constructor(brand, model) 
  {
    this.#brand = brand;
    this.#model = model;
    this.speed = 0; // starts at 0
  }

  go() 
  {
    this.speed = Math.min(this.speed + 5, 200);
    /*if (this.speed < 200) {
      this.speed = Math.min(this.speed + 5, 200);
    }*/
  }

  brake() 
  {
    this.speed = Math.min(this.speed - 5, 0);
    /*if (this.speed > 0) {
      this.speed = Math.max(this.speed - 5, 0);
    }*/
  }


  
  displayInfo() 
  {
      console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h`);
  }
}