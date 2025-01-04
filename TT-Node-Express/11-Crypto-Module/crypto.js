const crypto = require('crypto');

//! for the get random buffer memory
// const randomValue = crypto.randomBytes(8);
// console.log(randomValue);
//? OUTPUT ---> getting 8 bytes data in buffer in low level
//? Output ---> <Buffer dd 8a af ca 89 15 8b 02 >

//!so convert into something readble and then use
const randomValue = crypto.randomBytes(8).toString("hex"); //0 to f-hexdecimal value
console.log(randomValue)
//?output -> random hexdecimal value u got

//!Choose algorithm from which ypu got has value
//?SYNTAX----> crypto.createHash("module name").update("any string").digest("in which value u need data")

const hashValue = crypto.createHash("sha256").update("random value").digest("hex");
console.log(hashValue); //? hax code get 
const hashValue1 = crypto.createHash("sha256").update("random value").digest("hex");
console.log(hashValue1);
//?OUTPUT ---> hax code get same

//!NOTE
//? so for update value should same then the hax value will be same
//? USE - for respet password link



