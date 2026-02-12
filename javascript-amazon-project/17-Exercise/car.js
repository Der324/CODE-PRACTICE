export default class Car 
{
  brand;
  model;

  // 17a-exercise .constructor
  constructor(brand, model) 
  {
    this.brand = brand;
    this.model = model;
  }

  // 17b-exercise .displayInfo()
  displayInfo() {
    console.log(`${this.brand} ${this.model}`)
  }
}



