// copy Constructor

class Person {
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    copy() {
        return new Person(this.name,this.age);
    }
}

let obj1 = new Person("Rudra",20) 
let obj2 = obj1.copy();
console.log(obj2.name);
console.log(obj2.age);  