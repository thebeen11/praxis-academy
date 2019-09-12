class Vehicle {
    constructor(make, model, color, year) {
        this.make = make,
            this.model = model,
            this.color = color,
            this.year = year,
            this.getName = function() {
                return this.make + " " + this.model;
            };
    }
}

let car = new Vehicle("Toyota", "Corolla", "Black", "2011");
let car2 = new Vehicle("Honda", "Civic", "White", "2015");