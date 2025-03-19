// call the constructor of both class through child

class Animal
{
    constructor()
    {
        console.log("Making noise");
    }
}

class Dog extends Animal
{
    constructor()
    {
        super()
        console.log("Dog is barking");
    }
}

const dog = new Dog();