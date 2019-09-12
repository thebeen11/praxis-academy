'use strict';

let lime = {
    type: 'Mexican lime',
    color: 'Green',
    getInformation: function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}
console.log(lime.getInformation());

lime.color = 'Yellow';
console.log(lime.getInformation());