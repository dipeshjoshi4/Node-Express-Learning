//!Import http module first FOR THE USE
//======>  with this http provide us a built in method or utility use in file for creating server with one inbuilt function
//======>  const http = require("http");

//? for Creating server
// const server = http.createServer((req, res) => { })

//- we create server
//- this method return new instance of server in server variable
//- this function recevied parameter thats is called request listnear
//- it takes callback function which include 2 parameter req(request) & res(response)
//- here req parameter have object which store all the information about client request ,type of request
//- request response sent through "res"

//? for listean request we use
//? SYNTAX ===> server.listen(port.no)
//In one portNo only one server can run

//?CODE
// server.listen(3000, () => {
//     console.log("request listen server started");
// })

//! Now when server request comes we listen them so what happen see below
//?CODE
/*
const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" })
    res.end("learning node js") 
 })

server.listen(3000, () => {
    console.log("request listen server started");
})
*/

//? res.writeHead(200, { "content-type": "text/plain" })
//- provide status code
//1st parameter => one extra information with our response | 2nd parameter => reponse type(string here so => text / plain)
//? res.end("learning node js")
//- whatever actual response do you want to send you have to write

//! Now pass object as response

// const server = http.createServer((req, res) => {
//     const obj = {
//         name: "Yoshita",
//         surname : "Jain"
//     }
//     res.writeHead(200, { "content-type": "application/json" })
//     // res.end(obj)
//     res.end(JSON.stringify(obj))
// })
// server.listen(3000, () => {
//     console.log("request listen server started");
// })

//NOTE
//- always restart server
//- content type is needed if you write then write correct
//- you can pass object directly like res.end(obj) you should convert in  JSON format like this res,end(JSON.stringfy(obj))

//!Direct Send Html Data

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/html" })
//     res.end("<h1>Hey People</h1>")
// })
// server.listen(3000, () => {
//     console.log("server started")
// })


//! Send html data with html file

const http = require("http");
const fs = require('fs')
const server = http.createServer((req, res) => {
    const result = fs.readFileSync('./index.html', "utf-8")
    res.writeHead(200, { "content-type": "text/html" })
    res.end(result)
})
server.listen(3000, () => {
    console.log("request listen server started")
})


