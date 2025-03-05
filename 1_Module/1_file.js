// const math = require("./2_math_module"); // Type-1 : Importing a module and assigning the module to a variable

// console.log("This is export result of :",math.add(10,2));
// console.log("This is export result of :",math.sub(1,2));

// -------------------------------------------------
const { add1, sub } = require("./2_math_module"); // Type-2 : Importing a module by destructuring

// console.log("This is export result of :",add(10,2));
// console.log("This is export result of :",sub(10,2));


console.log("Checking the export",add1); // Output : Checking the export [Function (anonymous)]
