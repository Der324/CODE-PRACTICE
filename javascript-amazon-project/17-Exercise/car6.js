// 17f making brand and model properties private(Not being able to change the brnad and model of the car)

export default class Car6 
{
  #brand;
  #model;

  constructor(brand, model)
  {
    this.#brand = brand;
    this.#model = model;
    this.speed = 0;
    this.isTrunkopen = false;
  }

  go() 
  {
    if (this.isTrunkopen) 
    {
      console.log("Cannot drive while trunk is open.");
      return;
    }

    this.speed = Math.min(this.speed + 5, 200);
  }

  openTrunk() 
  {
    if (this.speed > 0) 
    {
      console.log("Cannot open trunk while moving.");
      return;
    }

    this.isTrunkopen = true;
  }

  closeTrunk()
  {
    if (!this.isTrunkopen)
    {
      console.log("Trunk already closed");
    return;
    }

    this.isTrunkopen = false;
  }

  displayInfo() 
  {
    const trunkStatus = this.isTrunkopen ? "Open" : "Close";

    console.log(`${this.#brand} ${this.#model}, speed: ${this.speed} km\h, Trunk: ${trunkStatus}`);
  }
  
}