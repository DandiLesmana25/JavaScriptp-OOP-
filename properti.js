class Car {
    //constructor(property)
    constructor(brand, color, maxSpeed, price) {

        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        //set random
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
        this.price = price;
    }
}

// objek
const car1 = new Car('BMW', 'red', 200, 250);
const car2 = new Car('Audi', 'blue', 220, 200);
const car3 = new Car('BMW', 'black', 250, 250);

console.log(car1);
console.log(car2);
console.log(car3);