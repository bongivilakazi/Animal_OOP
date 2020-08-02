let { Animal, Dog, Cat, Home } = require("../src/animal.js");

describe("class Animal", function() {
  let dog = new Animal();
  it("should execute 2 methods", function() {
    expect(dog.sound()).toBe("Sounds");
  });
  it("should execute 2 methods", function() {
    expect(cat.sound()).toBe("sounds");

  let cat = new Animal();
  it("should check if cat makes sound", function() {
    expect(cat.sound()).toBe("Sounds");
  });
});

describe("Home class", function() {
  let home = new Home();
  it("should check if makeAllSounds() method is defined", function() {
    expect(home.makeAllSounds).toBeDefined();
  });
})
})
