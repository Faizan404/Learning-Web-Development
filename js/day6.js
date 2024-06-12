// Loops
// for , while, do while, foreach, for of, for in

// For loop
// let strArr = ["Faizan", "Mustafa"];
// for (let i = 0; i <= 10; i++) {
// }
// let str = '';
// for(let i = 0; i <= strArr.length - 1; i++){
//     // str = str + strArr[i]
//     str += strArr[i]
// }
// console.log(str);

//While Loop
// let num = 5;
// let i = 5;
// while (i < 10) {
//   console.log(`${num} * ${i + 1} = ${num * (i + 1)}`);
//   i++;
// }

// let text = "";
// let i = 1;
// do {
//   text += i + "<br>";
//   i++;
// } while (i = 0);
// console.log(text);

// for in loop
// let text = "";
// for (let x in person) {
//   //   text += person[x] + " ";
//   //   console.log(person[x]);
// }
// let text = "";
// for (let x in cars) {
//   //   console.log(x, cars[x]);
//   //   text += cars[x] + " ";
// }

// for (let x of person) {
//   console.log(x);
// }
// for of loop
let text = "JavaScript";
for (let x of text) {
  //   text += x + " ";
  //   console.log(x);
}
// for in = Object => key , Arrays => index
// for of = Arrays => actual value

// for Each loop
const cars = ["BMW", "Volvo", "Saab", "Ford"];
// const person = { fname: "John", lname: "Doe", age: 25 };
// const staffsDetails = [
//   { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
//   { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
//   { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
//   { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" },
// ];
// cars.forEach((i) => console.log(i.name));

const array1 = [5, 12, 8, 130, 44];

const found = array1.map((element) => element > 10);

// console.log(found);
// Expected output: 12

// Task
// 1.	Sum all the array elements by using a loop.
function sumEleArray(arr) {
  let sum = 0;
  arr.forEach((element) => (sum += element));
  return sum;
  // for (let i = 0; i <= arr.length - 1; i++) {
  //   sum += arr[i];
  // }
}
console.log(sumEleArray([1, 34, 46, 5, 8, 0]));
// 2.	Make a reverse of the array by using a loop.
function reverseArray(arr) {
  let temp = 0;
  for (let i = 0; i <= arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - (i + 1)];
    arr[arr.length - (i + 1)] = temp;
  }
  return arr;
}
console.log(reverseArray([1, 34, 46, 5, 8, 0]));

// const reverseArray = (arr) => arr.reverse();
// console.log(reverseArray([1, 34, 46, 5, 8, 0]));
// function reverseArray(arr) {
// let revArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   revArr.push(arr[i]);
// }
// return revArr;
// }

// 3.	Make a table of the given number with all possible loops.
// 4.	Find the largest number in an array by using a loop.
const findLargestNumber = (arr) => {
  let max = 0;
  arr.forEach((ele) => (ele > max ? (max = ele) : ele));
  return max;
};
console.log(findLargestNumber([1, 34, 46, 5, 8, 0]));
// 5.	Find the smallest number in an array by using a loop.
// 6.	Make an array to store the name of 5 students and iterate with for and foreach loop.
// 7.	Make an object to store the information of a student and iterate with a for-in loop.

// [1, 34, 46, 5, 8, 0]
// arr[0] = arr[length - 1] //  0
// arr[length - 1] = arr[0]
// [0, 34, 46, 5, 8, 0]
