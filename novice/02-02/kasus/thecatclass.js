'use strict';

function reportCondition(name, condition) {
    console.log(`Cat ${name} is really ${condition}`);

}

class Cat {
    constructor(stage) {
        this.stage = stage;
        this.getInformation = function() {
            return 'Paw is really ' + this.stage;
        }
    }
    set tiredness({ name, condition }) {
        this.name = name;
        reportCondition(name, condition);
    }
}

const kitten = new Cat();
kitten.tiredness = { name: 'Lonely', condition: 'Eat' };
console.log(kitten.name);
console.log(kitten.getInformation());