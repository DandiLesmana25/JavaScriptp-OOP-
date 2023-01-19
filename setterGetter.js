// standar
// class Car {
//     constructor(brand, color, maxSpeed) {
//         this.brand = brand;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
//     }
// }

// const car = new Car('BMW', 'red', 200);
// car.chassisNumber = 'BMW-1';
// car.price = '300';

// console.log(car);


// accesor property
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //methos get
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    //methos set
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('Mamang', 'Coders');
console.log(user);
console.log(user.fullName);

user.fullName = 'aceng Fikri';
console.log(user);
console.log(user.fullName);