class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    return "animal sounds";
  }

  eats() {
    return `${this.name} + eats`;
  }
}

class Cat extends Animal {
  sound() {
    return "cat meows";
  }
}

class Dog extends Animal {
  sound() {
    return "dog barks";
  }
}

class Home {
  constructor(name) {
    this.name = name;
    this.array = [];
  }

  adoptPet() {
    this.array.push(this.name);
    return this.array;

  }

  makeAllSounds() {
    return "dog barks \n" + "cat meows";
  }
}

var dog = new Dog("Rex");

console.log(dog.eats());
console.log(dog.sound());

var cat = new Cat("Stormy");

console.log(cat.eats());
console.log(cat.sound());

var home = new Home();
var dog = new Dog();
var dog2 = new Dog();
var cat = new Cat();

home.makeAllSounds();
home.adoptPet(dog);
home.makeAllSounds();

home.adoptPet(cat);
console.log(home.makeAllSounds());

home.adoptPet(dog2);
home.makeAllSounds();


