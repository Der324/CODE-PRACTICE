// 17e-exercise creating class raceCar which extends car and accelerates

export default class Car5
{
  #brand;
  #model;

  constructor(brand, model) 
  {
    this.#brand = brand;
    this.#model = model;
    this.speed = 0; //public (needed for inheritance)
    this.isTrunkOpen = false // trunk starts closed
  }

  go() 
  {
    if (this.isTrunkOpen) {
      console.log("Cannot drive while trunk is open.")
      return;
    }

    this.speed = Math.min(this.speed + 5, 200);
  }

  brake() 
  {
    this.speed = Math.min(this.speed - 5, 0);

  }

  openTrunk() {
    if (this.isTrunkOpen) {
      console.log("Cannot open trunk while moving.");
      return;
    }

    if (this.isTrunkOpen) {
      console.log("Trunk already open.");
    }

    this.isTrunkOpen = true;
  }

  closeTrunk() {
    if(!this.isTrunkOpen) {
      console.log("Tunk is already closed.");
      return;
    }

    this.isTrunkOpen = false;
  }


  
  displayInfo() 
  {
    const trunkStatus = this.isTrunkOpen ? "Open" : "Closed";

    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`);
  }
}