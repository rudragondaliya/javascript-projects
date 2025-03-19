class Vehicle {
    start()
    {
        console.log("Vehicle is starting");
    }
}

class Car extends Vehicle
{
    start()
    {
        console.log("Your car is starting");
    }
}

class Bike extends Vehicle
{
    start()
    {
        console.log("Your Bike is starting");
    }
}

let Vehicles = [new Car(),new Bike()];

Vehicles.forEach(Vehicle => {
    Vehicle.start();
});