const fs = require('fs')

//!Predefiend function

//?1-file created and edited or starting writing
//first argument : path
//second argument : Message
//third if you edit with not override old :{flag:"a"}

//?Syntax
//fs.writeFileSync("path", "message", without override edit so we write{ flag: "a" })

//?Sync Operation
// fs.writeFileSync('./sample.txt', "Hey Guys");
// fs.writeFileSync('./sample.txt', " Please Follow", { flag: "a" });

//? Aync function and work async operation
// fs.writeFile('./sample.txt', "Hey Guys", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("file return");
//     }
// })

//? 2->for read data and stored

//?Sync Operation
// const result = fs.readFileSync("./sample.txt")
// console.log(result)

//? OUTPUT ->machine language data

//? TO CONVERT DATA from machine to normal
// const result = fs.readFileSync("./sample.txt","utf-8")
// console.log(result)
//?-> Sync function always need to store in some variable then console.log


//?Aync Operation

// const result = fs.readFile("./sample.txt","utf-8")
// console.log(result)

//?-> Error get because every async function u have to given callback

// fs.readFile("./sample.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result)
//     }
// })

//? -> Until need we use async module always

//? Now let prove its working as Async

console.log(1);
const result = fs.readFileSync("./sample.txt", "utf-8")
console.log(result);

console.log(2, "after blocking operation print")

fs.readFile("./sample.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
});
console.log(3,"Before Aync function")

//?OUTPUT
//   1
//   Hey Guys
//   2 after blocking operation print
//   3 before Async Function
//   Hey Guys
