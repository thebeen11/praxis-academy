'use strict';

let lime = new function() {
    this.type = 'Mexican lime';
    this.color = 'Green';
    this.getInformation = function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

console.log(lime.getInformation());
lime.color = 'Yellow';
console.log(lime.getInformation());