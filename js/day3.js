// DRY Don't repeat yourself
// Functions
// Functions with parameters and arguments
// Functions with default parameters and arguments

// global scope
// local scope / block scope

function calcArea(n1 = 50, n2 = 50) {
    let num1 = n1;
    let num2 = n2;
    let sum = num1 + num2;
    return function () {
        // console.log("Sum of two number num1", num1, "and num2", num2, "is: ", sum);
        console.log(`Sum of two number num1 ${num1} and num2 ${num2} is: ${sum}`);
    };
    // if (num1 === 50 || num2 === 50 || sum >= 50) {
    //     return "true";
    // } else return "false";
}
console.log(calcArea(12)());
// console.log(calcArea(45, 2));
// console.log(calcArea(3, 56));
// console.log(calcArea(55, 0));
// console.log(calcArea(2, 14));


// generic function
function greet() {
    console.log("Hello World")
}
greet()
// function expression
const calcProd = function () {
    return 2 * 4;
}
console.log(calcProd());
// arrow function
const calcSum = () => 2 + 34;
console.log(calcSum());
// anonaymous function
// callback function
// IIFE Imediately Invoke function expression
(function calcMod() {
    console.log(34 % 2);
})();