//? How TO Require
const path = require("path")

//?Special Node.js Constants
console.log(__dirname); //- get full path this file folder //till directoyt
console.log(__filename); //- get full path this file //till file

//?Example of one path
//school folder / students / data.txt

const filePath = path.join("folder", "students", "data.txt");
console.log(filePath)

const parseData = path.parse(filePath);
const resolveData = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath)
const dirname = path.dirname(filePath)

console.log({ parseData, resolveData, extname, basename, dirname, separator: path.sep });

console.log({ separator: path.sep }) //? OUTPUT ->'\\'

//?Why some have double vs single slashes in console vs object console
    //- while object console we get json look a like file 
    //- in json '\' is work as escape charcter but we get "\\"
    //- its not json because in json this key => resolveData: 'F:\\Nodjs\\....... will be look like this "resolveData": 'F:\\Nodjs\\.......
    //- in json key resolvedata in  double quotes