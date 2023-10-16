console.log("Hello World");
console.log(global);

const { log } = require("console");
const os = require("os")
const path = require("path")

// const math = require('./math')    //To import server.js 

// console.log(math.add(2, 3));        
// console.log(math.subtract(2, 3));
// console.log(math.multiply(2, 3));
// console.log(math.divide(2, 3));




// const add = (a,b) => a+b
// const subtract = (a,b) => a-b
// const multiply= (a,b) => a*b
// const divide = (a,b) => a/b


  

// module.exports = {add,subtract,multiply,divide}

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.multiply = multiply;
// module.exports.divide = divide;

// module.exports = { add, subtract, multiply, divide };


console.log(os.type());
console.log(os.version());
console.log(os.homedir());


console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));



const { add, subtract, multiply, divide } = require('./math'); // Assuming math.js is in the same directory as main.js

console.log(add(2, 3)); // Output: 8
console.log(subtract(2, 3)); // Output: 6
console.log(multiply(2, 3)); // Output: 6
console.log(divide(2, 3)); // Output: 5