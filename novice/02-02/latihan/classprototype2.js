'use strict'

function Fruit(type) {
    this.type = type;
    this.color = 'unknown';
}

Fruit.prototype.getInformation = function() {
    return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Fruit('American lime');
console.log(lime.getInformation());

lime.color = 'Orange';
console.log(lime.getInformation());