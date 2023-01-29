function Car(brand, color, maxSpeed, chassisNumber) {
    // Keyword this dapat dimanfaatkan untuk mengakses nilai properti atau method dari objek tersebut. 
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

//  mendefinisikan method-method yang akan dimiliki oleh objek
Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
}

// Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
const car4 = new Car('Wuling', 'Pink', 260, 'wu-1');

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);

car1.drive();
car2.drive();
car3.drive();
car4.turn();