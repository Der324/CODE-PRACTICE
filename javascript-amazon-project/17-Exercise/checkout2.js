import Car5 from './car5.js';
import RaceCar from './racecar1.js';
import Car6 from './car6.js';
import Car7 from './car7.js';

const normalCar = new Car7('Toyota', 'Corolla');
const raceCar = new RaceCar('Mclaren', 'F1', 20);

// Normal car
normalCar.go();
//normalCar.go();
normalCar.displayInfo();

// Race car
raceCar.go();
//raceCar.go();
raceCar.displayInfo();

/* Try trunk on race car
raceCar.openTrunk();
raceCar.closeTrunk();*/

console.log(normalCar);
console.log(raceCar);