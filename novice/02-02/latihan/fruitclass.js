'use strict';
//External function
// function Fruit(type) {
//     this.type = type;
//     this.color = 'unknown';
//     this.getInformation = getFruitInformation;
// }

// function getFruitInformation() {
//     return 'This ' + this.type + ' is ' + this.color + '.';
// }

// let lime = new Fruit('Mexican lime');
// console.log(lime.getInformation());

// lime.color = 'green';
// console.log(lime.getInformation());


//Function internally
function Fruit(type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());