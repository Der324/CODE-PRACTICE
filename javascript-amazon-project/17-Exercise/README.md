17 Exercises

17a. Create a class that represents a car. Create a new file data/car.js and create a class Car {} Give the car class 2 properties: brand and model. Then, create a constructor that sets these 2 properties. Keep all properties public for now (we'll learn why in a later exercise). Use this class to generate a few car objects: {brand: 'Toyota', model: 'Corolla' } {brand: 'Tesla', model: 'Model 3' } console.log the car objects. In checkout.js, load data/car.js using the import '...'; syntax, and check the console.

17b. add a method displayinfo() that console.logs ${brand} ${model} Run. displayinfo() for each car, and check the console.

17c. Add a speed property, which represents how fast the car is going. The speed should start at 0 Add 2 methods go() (increases speed by 5) and break() (decreases speed by 5) The speed should be limited between 0 and 200 Update displayInfo() to display the speed at the end: ${brand} ${model}, Speed: ${speed} km/h Call go() and break() a few times for each car, call displayInfo() and check the console to confirm the code is working.

17d. add isTrunkOpen property, which tracks is the car's trunk is open should be a boolean property(true=open, false=closed) Create openTrunk() and closeTrunk(), which opens/ closes the trunk. openTrunk() should not work if the trunk is open go() should not work if the trunk is open Update displayInfo() to display trunk info at the end. Try the code.

17e. Create a new class RaceCar which extends car. Race cars go faster than normal cars, so the racecar has an additional property acceleration instead of 5, and update the top speed to 300. Race cars do not have trunk. Update openTrunk() and CloseTrunk() Create a race car {brand: 'Mclaren', model: 'F1', acceleration: 20} try the code.

17f. Make brand and model properties private (just should not be able to change the brand and model of a car!) Update displayInfo() with the private properties, and try the code.

17g. Now, try making the speed property private. Update the rest of the code and try the code. NOtice the code doesn't work because the RaceCar class cannot access the private #speed property (private properties can only be accessed in the same class. They can't be accessed in a child class) Therefore, we'll have to change speed back to public. In other languages, a property can be public, private, or protected(protected = it can be accessed inside a class and its child classes) Object-Oriented Programming is less popular in Javascript because is missing some feature of OOP, like protected properties.