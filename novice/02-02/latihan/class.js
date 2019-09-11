function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name, 'speaks.');
}

class Dog extends Animal {
  speak() {
      console.log(this.name, 'barks.');
  }
}

let spot = new Dog('Spot');
spot.speak();

spot = new Animal('Spot');
spot.speak();