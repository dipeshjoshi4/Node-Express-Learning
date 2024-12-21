//?import module
const path = require("path")

//?Different function provide by path module
//SOURCE - https://nodejs.org/api/path.html

//?to find directory
console.log(path.dirname("F:/NodeJS/Yoshita-NodeJS/Path module/index.js"))

//? to find extname
console.log(path.extname("F:/NodeJS/Yoshita-NodeJS/Path module/index.js"))

//?to find filename
console.log(path.basename("F:/NodeJS/Yoshita-NodeJS/Path module/index.js"))

//? to find path.parse
//- it given output as object
//- that object contain all the file directory,extension,basename,root

console.log(path.parse("F:/NodeJS/Yoshita-NodeJS/Path module/index.js"));

//to find indvidual or check this  then

const result = path.parse("F:/NodeJS/Yoshita-NodeJS/Path module/index.js");
if (result.root = "F:/") {
    console.log("yes")
} else {
    console.log("No");
}

