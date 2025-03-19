class Student
{
    constructor(id,name,age,course)
    {
        this.id = id;
        this.name = name;
        this.age = age;
        this.course = course;
    }

    getDetails() {
        console.log(`Grid: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Course: ${this.course}`);
        console.log(" ");
        
    }
}

let std1 = new Student(7962,"Rudra Gondaliya",20,"FULL-STACK-DEVELOPMENT");
let std2 = new Student(7348,"Rushabh Gadhiya",22,"FULL-STACK-DEVELOPMENT");
let std3 = new Student(7900,"Rohan Katiriya",21,"FULL-STACK-DEVELOPMENT");
let std4 = new Student(420,"Ganpat Tota",24,"FULL-STACK-DEVELOPMENT");

std1.getDetails();
std2.getDetails();
std3.getDetails();
std4.getDetails();