class Car {
    //constructor(property)
    constructor(brand, color, maxSpeed, price) {

        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        //set random property, cth-> property chassisNumber
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
        this.price = price;
    }
}

// objek
const car1 = new Car('BMW', 'red', 200, 250);
console.log(car1);




// class email
class Mail {
    //constructor(property)
    constructor(sender, receiver, subject, body) {
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }
}