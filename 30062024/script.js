// JS BASIC: data type, variable, conditions, functions,
// loops: while, for, forEach,
// ES6: loops(.map, .filter, .reduce), Turnery Operators, && operator object or array destructing,
// DOM MANUPULATION

// Syntax
// Data Types: String, Integer, Boolean, BigInteger, null, undefined, NAN
// variable is a container that store some data.

var name = "Mrinmoy Ghosh"; //String
var age = 27; // Integer
var isGraduated = false; //Boolean
var something; //undefined
var data = null;

//  Array
var students = ["Mrinmoy", "Parthib", "Abhijit", 27, true, null, undefined];

// Object
var studentInfo = {
  name: "Parthib",
  age: 24,
  isGraduated: true,
};

// Array of objects
var allStudentInfo = [
  studentInfo,
  {
    name: "Abhijit",
    age: 24,
    isGraduated: true,
  },
  {
    name: "Mrinmoy",
    age: 27,
    isGraduated: false,
  },
];

// variable types: var, let and const
var myName = "Mrinmoy";
let myAge = 27;
const myGender = "Male";
// myGender = "female";
// console.log("My previus age: " + myName); // concatenation
// myName = 28;
// console.log("My next age: " + myName); // concatenation

// Conditions
// var age = 16;
// if (age >= 60) {
//   console.log("Buro manus");
// } else if (age >= 18) {
//   console.log("ADULT");
// } else {
//   console.log("teanager");
// }

// var vs let
// if (true) {
//   let a = "SOMETHING";
//   console.log(`Inner ${a}`);
// }
// console.log(`Outer ${a}`);

function funName(name) {
  console.log(`HELLO ${name}`);
}

// funName("MRINMOY");
// funName("DEEP");
// funName("TANU");
// funName("ABHIJIT");

function sum(a, b, c) {
  let sum = a + b + c;
  console.log(`sume: ${sum}`);
}

// sum(34, 20, 13);

// recursion
function recurse(num) {
  if (num === 1) {
    return 1;
  }
  return num + recurse(num - 1);
}
let res = recurse(5);
console.log(res);
// 1 + 2 + 3 + 4 + 5 = 15
// 5 + 4 + 3 + 2 + 1 = 15
