// call parent class constructor through child class

class Animal
{
    constructor()
    {
        console.log("making noise");
    }
}

class Dog extends Animal
{

}

const dog = new Dog();