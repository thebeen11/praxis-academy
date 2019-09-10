function Vehicle(make, model, color) {
    this.make = make,
    this.model = model,
    this.color = color,
    this.getName = function () {
        return this.make + " " + this.model;
    }
}

let corolla = new Vehicle("Toyota", "Corolla", "Black");

Vehicle.prototype.year = "2016"

console.log(corolla);
console.log(corolla.year);


