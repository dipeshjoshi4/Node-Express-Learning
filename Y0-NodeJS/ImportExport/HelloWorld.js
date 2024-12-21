

//? ------------------------------1St-Mathod-------------------------------
// const addModule = require('./Sum.js')
// console.log("Hello World");
// console.log(addModule(15, 20));

//? ------------------------------2nd-Mathod-------------------------------

// const addModule2 = require("./Sum.js");
// console.log("Hello World");
// console.log(addModule2(15, 20));

//? ------------------------------3rd-Mathod-------------------------------

// const addModule3 = require("./Sum.js")
// console.log("Hello World");
// console.log(addModule3.sum(15, 20));
// console.log(addModule3.subs(20,15));

//? -----------------------------3.2->Method------------------------------------
// const addModule3 = require("./Sum.js")
// console.log("Hello World");
// const { sum, subs } = addModule3; //?use desturucture method and destructring object
// console.log(sum(10, 3));
// console.log(subs(10, 3));

//? -----------------------------3.3->Method------------------------------------

// const addModule3 = require("./Sum.js");
// const { sum, subs } = addModule3;
// console.log("Hello World");
// console.log(sum(15, 5));
// console.log(subs(15, 5));

//? -----------------------------3.4->Method------------------------------------

const addModule3 = require("./Sum.js");
const { sum, subs } = addModule3;
console.log("Hello World");
console.log(sum(15, 5));
console.log(subs(15, 5));

