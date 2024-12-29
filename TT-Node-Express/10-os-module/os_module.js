const os = require("os");


console.log("platform => ", os.platform());


console.log("User => ", os.userInfo());


console.log("CPU ARCHITECTURE => ", os.arch());

console.log("Free Memory => ", os.freemem(), "bytes");

console.log("Total Memory => ", os.totalmem(), "bytes");


///----> many other property and method will be on README.md