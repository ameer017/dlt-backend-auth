const math = require("./math");
const maths = require("./server");

// const add = (a, b) => a + b
// const subtract = (a, b) => a - b
// const multiply = (a, b) => a * b
// const divide = (a, b) => a / b
// module.exports = {add, subtract, multiply, divide}          //To export this file

//              //
        // OR
//              //




// console.log(maths.add(2,3));
// console.log(maths.subtract(2,3));
// console.log(maths.multiply(2,3));
// console.log(maths.divide(2,3));

exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;