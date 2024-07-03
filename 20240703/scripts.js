// JS BASIC: data type, variable, conditions, functions,
// loops: while, for, forEach,
// ES6: arrow functions, loops(.map, .filter, .reduce), Turnery Operators, && operator, object or array destructing,
// DOM MANUPULATION

// 1 to 5 print
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++; // i = i + 1
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

let data = [
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
  {
    name: "Deep",
    age: 26,
    isGraduated: true,
  },
];
// console.log(data.length);
// console.log(data[2]);
// for (let i = 0; i < data.length; i++) {
//   console.log(data[i].name);
// }
// foreach loop
let f = data.forEach(function (item) {
  //   console.log(item.name);
  //   console.log(item.age);
  //   console.log(`My name is ${item.name} and my age is ${item.age}`);
  return item.name;
});

// .map loop
let m = data.map((item, index) => {
  console.log(`My name is ${item.name} and my age is ${item.age} => ${index}`);
  //   return item.name;
});

// console.log(`value of f is ${f}`);
// console.log(`value of m is ${m}`);

// let graduates = data.filter(function (item) {
//   return item.isGraduated;
// });

// console.log(graduates);

// function name(item) {
//   console.log(item);
// }
// const name = (item) => {
//   console.log(item);
// };
// name("MRinmoy");

// let graduates = data.filter((item) => item.isGraduated);

// console.log(graduates);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);
// let arr = [3, 4, 8, 12, 16];
// let sum = arr.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);

// Accumator CurrentValue Sum
//   0          3         = 3
//   3          4         = 7
//   7          8         = 15
//   15         12        = 27
//   27         16        = 43
