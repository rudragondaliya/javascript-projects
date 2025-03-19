class Appliance
{
    command() {
        console.log("Some appliances are connecting");
    }
}

class Refrigerator extends Appliance
{
    command()
    {
        console.log("Refrigerator is started");
    }
}

class WashingMachine extends Appliance
{
    command()
    {
        console.log("Washing Machine is started");
    }
}

class Microwave extends Appliance
{
    command()
    {
        console.log("Microwave is started");
    }
}

let appliances = [new Refrigerator(),new WashingMachine(),new Microwave()];

appliances.forEach(appliance => {
    appliance.command();
});