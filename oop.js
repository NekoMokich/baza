//OOP - rapadigm in programming 
//that use "objects" for presenting
//data and methods used in work with that data 

//1. Classes and Object (Class & Object)
//class - "blueprint/scheme" for making a object 
//object - example for classes and for personal data 


class Animal {
    //constructor - special method for 
    //creating and intiliazing an object created with a class 

   constructor(name, age) {
        //this - reference to the current object
        this.name = name;
        this.age = age;
    }
    //class method - a function inside an object
    speak() {
        console.log(`${this.name} make a somekind sound`);
    }
    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const genericAnimal = new Animal('Some animal', 5);
const myDog = new Animal ("Bulik", 8);

genericAnimal.displayInfo();
myDog.displayInfo();
myDog.speak();


