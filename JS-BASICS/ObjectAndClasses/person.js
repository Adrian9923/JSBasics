class Person {
    constructor(fName, lName, age, email) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.fName} ${this.lName} (age: ${this.age}, email: ${this.email})`;
    }
};

function getPeople() {
    let personOne = new Person('Anna', 'Simpson',
  22, 'anna@yahoo.com'); 

//console.log(person.toString());
let personTwo = new Person('SoftUni');
let personThree = new Person('Stephen', 'Johnson', 25);
let personFour = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

let arr = [personOne, personTwo, personThree, personFour];

arr.forEach(element => {
    console.log(element);
});
}

getPeople();

