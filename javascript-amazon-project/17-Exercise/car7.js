// 17g making speed private to see the limitations of JavaScript's private field.
export default class Car7 
{
  #brand;
  #model;
  #speed;

  constructor(brand, model) 
  {
    this.#brand = brand;
    this.#model = model;
    this.#speed = 0;
    this.isTrunkopen = false;
  }

  go()
  {
    if (this.isTrunkopen)
    {
      console.log("Cannot drive while trunk is open.");
      return;
    }

    this.#speed = Math.min(this.#speed + 5, 200);
  }

  brake()
  {
    this.#speed = Math.max(this.#speed - 5, 0);
  }

  openTrunk()
  {
    if (this.#speed > 0)
    {
      console.log("Cannot open trunk while moving.");
      return;
    }

    this.isTrunkopen = true;
  }

  closeTrunk() 
  {
    this.isTrunkopen = false;
  }

  displayInfo()
  {
    const trunkStatus = this.isTrunkopen ? "Open" : "Close";

    console.log(`${this.#brand} ${this.#model}, Speed: ${this.#speed} km\h, Trunk: ${trunkStatus}`);
  }
}