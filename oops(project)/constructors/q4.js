// static constructor

class Person {
    static species = 'rudra';

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static getSpecies() {
        return this.species;
    }
}

const person5 = new Person('rohan', 28);
console.log(person5.name);
console.log(person5.age);  


console.log(Person.species);
console.log(Person.getSpecies()); 