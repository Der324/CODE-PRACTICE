17 Exercises:

17a. Create a class that represents a car. Create a new file data/car.js and create a class Car {} Give the car class 2 properties: brand and model. Then, create a constructor that sets these 2 properties. Keep all properties public for now (we'll learn why in a later exercise). Use this class to generate a few car objects: {brand: 'Toyota', model: 'Corolla' } {brand: 'Tesla', model: 'Model 3' } console.log the car objects. In checkout.js, load data/car.js using the import '...'; syntax, and check the console.

17b. add a method displayinfo() that console.logs ${brand} ${model} Run. displayinfo() for each car, and check the console.

17c. Add a speed property, which represents how fast the car is going. The speed should start at 0 Add 2 methods go() (increases speed by 5) and break() (decreases speed by 5) The speed should be limited between 0 and 200 Update displayInfo() to display the speed at the end: ${brand} ${model}, Speed: ${speed} km/h Call go() and break() a few times for each car, call displayInfo() and check the console to confirm the code is working.

17d. add isTrunkOpen property, which tracks is the car's trunk is open should be a boolean property(true=open, false=closed) Create openTrunk() and closeTrunk(), which opens/ closes the trunk. openTrunk() should not work if the trunk is open go() should not work if the trunk is open Update displayInfo() to display trunk info at the end. Try the code.

17e. Create a new class RaceCar which extends car. Race cars go faster than normal cars, so the racecar has an additional property acceleration instead of 5, and update the top speed to 300. Race cars do not have trunk. Update openTrunk() and CloseTrunk() Create a race car {brand: 'Mclaren', model: 'F1', acceleration: 20} try the code.

17f. Make brand and model properties private (just should not be able to change the brand and model of a car!) Update displayInfo() with the private properties, and try the code.

17g. Now, try making the speed property private. Update the rest of the code and try the code. NOtice the code doesn't work because the RaceCar class cannot access the private #speed property (private properties can only be accessed in the same class. They can't be accessed in a child class) Therefore, we'll have to change speed back to public. In other languages, a property can be public, private, or protected(protected = it can be accessed inside a class and its child classes) Object-Oriented Programming is less popular in Javascript because is missing some feature of OOP, like protected properties.

17h. In the Amazon project, create a class Appliance{}
An appliance is a specific type of product (it extends Product).
It has 2 extra properties: instructionsLink and warrantyLink.
In the products array, and type, instructionsLink, and warrantyLink to the toaster(4th product). If you need, download the images from: supersimple.dev/images/appliance-instructions.png
supersimple.dev/images/appliance-warranty.png
Convert the toaster into an appliance class instead of product class.
When displaying extra info, display the instructions and the warranty. Follow the design on the right:
Find other products that are appliances(kettle, blender, etc.) and convert them to Appliance class

17I. Create tests for the Product, Clothing, and Appliance classes.
Create a new test file data/productsTest.js and load it in test.html
Create a test suite for each class and create tests for each class(Export the classes, generate objects using each class, and check if the properties and methods are correct).
When testing extraInfoHTML you can use expect(...) .toContain(...) tho check if the result contain string.

17j.
Note: you may want to create a copy of the project code for exercise17j.
Replace all uses of cart array with the cart class.
In data/cart-class.js export the cart object. Replace all uses of import ... data/cart.js with import ... data/cart-class.js
Update the code and thetest to make everything work again.
Hint: in the test, instead of mocking localStorage.getItem you can just directly set cart.cartItems = [...]
