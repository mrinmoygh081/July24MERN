// .map
// arrow function
// Turnery Operators, && operator, object or array destructing,
// DOM MANUPULATION
// promise

let res = sum(3, 5);
// console.log(res);

// console.log(b);
var b = 5;

// normal function
function sum(a, b) {
  return a + b;
}

// arrow function
const multiple = (a, b) => {
  return a * b;
};
// multiple(3, 5);

// function without name is called anonymous function
// (function () {
//   console.log("checking");
// })();

let arr = [4, 9, 10, 11, 2, 8, 8, 8];

// arr.map((item, index) => {
//   console.log(item, index);
// });

let even = arr.filter((item) => item % 2 === 0);
// console.log(even);

let age = 1;
// if (age >= 60) {
//   console.log("Oldage");
// } else if (age >= 18) {
//   console.log("ADULT");
// } else {
//   console.log("NOT ADULT");
// }
// turnery operator
// condition ? true : false;
// age >= 18 ? console.log("ADULT") : console.log("NOT ADULT");

// condition1 ? true : condition2 ? true2 : condition3 ? true3 : condition4 ? true4 : condition5 ? true5 : false;
// age >= 60
//   ? console.log("Oldage")
//   : age >= 18
//   ? console.log("ADULT")
//   : console.log("NOT ADULT");

// if (age >= 18) {
//   console.log("ADULT");
// }
// condition && true
// age >= 18 && console.log("ADULT");

// if (age >= 60 || age <= 10) {
//   console.log("NEED PROPER CARE");
// }
// (age >= 60 || age <= 10) && console.log("NEED PROPER CARE");

// spread operator | Object destructuring
// let obj1 = {
//   name: "Mrinmoy",
//   age: 27,
//   isGraduated: true,
// };
// let obj2 = { ...obj1, gender: "MALE", age: 20 };

// console.log(obj2);

let people = [
  {
    name: "Mrinmoy",
    age: 27,
    isGraduated: true,
  },
  {
    name: "Bishal",
    age: 22,
    isGraduated: true,
  },
  {
    name: "Parthib",
    age: 21,
    isGraduated: true,
  },
];
let updatedPeople = people.map((item, i) => {
  if (item.name === "Bishal") {
    item.age = 23;
  }
  return item;
});
// console.log(updatedPeople);
