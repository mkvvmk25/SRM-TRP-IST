// // let obj = {
// //   "key": 64,
// //   "hello world": 101,
// //   78: "hello",
// //   "arr": [7, 9.54, true],
// // };

// // console.log(obj.key);
// // console.log(obj["hello world"]);
// // console.log(obj[78]);
// // console.log(  obj.78 );

// // properties
// // functions or methods
// // let Person = {
// //   fname: "raj",
// //   age: 32,
// //   //   "aboutMe": function ()
// //   //   {
// //   //     console.log(`i am ${this.fname}, age is ${this.age}`);
// //   //   }
// // };

// // // person.prototype.aboutMe = function () {
// // //   console.log(`i am ${this.fname}, age is ${this.age}`);
// // // };

// // console.log("Person",78 );
// // console.log(JSON.stringify(Person));
// // // person.aboutMe();

// // OOPS
// /*
//   to work with class and object
//   -> classes can be created in 3 ways
//         -> constructor function
//         -> ES6 classes
//         -> Object.create()
// */

// // let Human = function (fnameVal, ageVal) {
// //   this.fname = fnameVal;
// //   this.age = ageVal;
// // };

// // Human.prototype.state = "tamilnadu";
// // Human.prototype.aboutMe = function () {
// //   console.log(`i am ${this.fname}, age is ${this.age}`);
// // };

// // create object
// // let raj = new Human("raj", 25);
// // raj.aboutMe();
// // console.log(raj);

// // let kiran = new Human("kiran", 32);

// // kiran.fname = "kiran";
// // kiran.age = 25;
// // let kumar = new Human();
// // let tarun = new Human();
// // console.log(kiran);
// // console.log(kumar);

// /*
//   pillars of OOPS
//     --Inheritance
//     encapsulation
//     abstraction
//     polymorphsim
// */

// // let Student = {    // json
// //   "fname":"none",
// //   "rollNum":0
// // }

// // let tarun = Object.create(Student);
// // console.log(tarun);

// let Human = function (fnameVal, ageVal) {
//   this.fname = fnameVal;
//   this.age = ageVal;
// };

// Human.prototype.state = "tamilnadu";
// Human.prototype.aboutMe = function () {
//   console.log(`i am ${this.fname}, age is ${this.age}`);
// };

// let Student = function (rollVal, fnameVal, ageVal, dptVal) {
//   // call HumAN CLASS CONSTRUCTOR funtion under child class
//   Human.call(this, fnameVal, ageVal);
//   this.rollNum = rollVal;
//   this.department = dptVal;
// };

// // linking prototypes
// Student.prototype = Object.create(Human.prototype);

// // Student.prototype = Human.prototype;

// Student.prototype.studying = function()
// {
//     console.log(`i study ${this.department}`);
// }
// let raj = new Student(101, "raj", 20, "CSE");
// console.log(raj);

// https://bit.ly/ZO-300724

// JS6 Classes
class Human {
  constructor(fnamev, agev) {
    this.fname = fnamev;
    this.age = agev;
  }

  aboutMe() {
    console.log(`i am ${this.fname} age is ${this.age}`);
  }
}

Human.prototype.greetMe = function () {
  console.log(`Hi! ${this.fname}, Good MNitn`);
};

class Student extends Human {
  constructor(dept, rollv, fnamev, agev) 
  {
    super(fnamev, agev); //  
    this.departmemnt = dept;
    this.roll = rollv;
  }
}

let raj = new Student("ece", 101, "raj", 20);
console.log(raj);
