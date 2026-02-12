// 17g-Exercise making the speed property private
import Car3 from './car3.js';

class RaceCar extends Car3 {
  go() {
    this.speed = Math.min(this.speed + 20, 300);
  }
}

export default RaceCar;
