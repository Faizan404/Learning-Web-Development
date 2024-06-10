// Arrays, Objects
// Primitive and Refrence Types
// Mutable and Immutable Data types
/**
    Primitive types
 * Atomic Values
    - number
    - string
    - undefined
    - null
    - boolean

    Refrence Types
    - Arrays
    - Objects
 */

// let fruits = ["apple", "mango"];
// fruits[7] = "orange";
// console.log(fruits, fruits.length, fruits[fruits.length - 1]);


// let num = [1,35,56,68,32,6];
// console.log(num);
// if(Array.isArray(num)){
//     num.push("Hello");
//     num.unshift("World");
//     num.pop();
//     num.shift();
//     }
// console.log(num);   
// console.log({} instanceof Array); 


// toString();
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(`toString(): ${fruits.toString()}`);
console.log(`at(): ${fruits.at(2)}`);
console.log(`join(): ${fruits.join("/")}`);
console.log(fruits);
// fruits.splice(5, 2);
// fruits = fruits.slice(1, 3);
// delete fruits[0];
console.log(fruits);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Emil", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

console.log(myChildren.indexOf("Emil"))
console.log(myChildren.lastIndexOf("Emil"))
console.log(myChildren.includes("Faizan"))

const names = ["Faizan", "Ali", "Hamza"];
const students = [...names];
students.push("Qasim");
console.log(students, names);

function calcArea(...args){
    console.log(args);
}
calcArea(1,2,3,4,5)



// Task
// 1.	Find the last element of an array without giving a hard-coded index.
// 2.	Check whether the first or the last index of an array has a specified value, let's say 5.
// 3.	Make an array to store the names of students and check whether that array has your own name or not and also return the index of that value.
// 4.	Add the array element at the specified index.
// 5.	Delete the array element from the specified index.









