
//? ------------------------------1St-Method-------------------------------
// const Sum = (a, b) => {
//     return a + b
// }
// module.exports = Sum;

//? ------------------------------2nd-Method-------------------------------

// module.exports = (a, b) => {
//     return a + b
// }

//? -----------------------------3rd-Method-------------------------------
// const sum = (a, b) => {
//     return a + b
// }
// const subs = (a, b) => {
//     return a - b
// }
// module.exports = {
//     sum: sum,
//     subs: subs,
// }
//? if the key and value in module object are same then you can write like this
// module.exports = {
//     Sum,
//     subtract
// }


//? -----------------------------3.2->Method------------------------------------
// const sum = (a, b) => {
//     return a + b
// }
// const subs = (a, b) => {
//     return a - b
// }
// module.exports = {
//     sum,
//     subs
// }

//? -----------------------------3.3->Method------------------------------------
// module.exports.sum = (a, b) => {
//     return a + b;
// }
// module.exports.subs = (a, b) => {
//     return a - b;
// }

//? -----------------------------3.4->Method------------------------------------

exports.sum = (a, b) => {
    return a + b;
}
exports.subs = (a, b) => {
    return a - b;
}

//! We can import like this too => import addModule from "./Sum";