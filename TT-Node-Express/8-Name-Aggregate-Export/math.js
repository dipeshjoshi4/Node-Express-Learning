
const add = (a,b) => {
    return a + b;
}

const div = (a,b) => {
    return a / b;
}

const sub = (a,b) => {
    return a - b;
}

const mult = (a,b) => {
    return a * b;
}

//?1
// module.exports.add = add;
// module.exports.mult = mult;
// module.exports.div = div;
// module.exports.sub = sub;

//?2
module.exports = { div, mult, add, sub };