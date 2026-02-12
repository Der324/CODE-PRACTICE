// 17-exercises
import Car1 from './car1.js';
import Car2 from './car2.js';
import Car3 from './car3.js';
import RaceCar from './raceCar.js';
import Car4 from './car4.js';


// Create car objects
const car1 = new Car4('Toyota', 'Corolla');
//const raceCar1 = new RaceCar('Ferrari', 'F8');
//const car2 = new Car2('Tesla', 'Model 3');

// Toyota
car1.go();
car1.go();
//car1.go(); // speed should now be 15
//car1.brake(); // speed should now be 10
car1.displayInfo();

/* Race Car
raceCar1.go();
raceCar1.go();
raceCar1.displayInfo();
*/
 
// open trunk
car1.openTrunk();
car1.displayInfo();

// Try driving with trunk open (should fail)
car1.go();
car1.displayInfo();

// Close trunk and drive again
car1.closeTrunk();
car1.go();
car1.displayInfo();

/* Tesla
car2.go();
car2.go();
car2.go(); 
car2.brake(); // speed should now be 0
car2.displayInfo();*/

console.log(car1);
//console.log(car2);

car1.displayInfo();
//car2.displayInfo();