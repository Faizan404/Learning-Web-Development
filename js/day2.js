// truthy = all the values other than falsy values
// falsy = false, 0, -0, 0n, "", null, undefined, NaN

// Conditional Operators
// >
// <
// >=
// <=
// !=
// !==
// ==
// ===

// Logical Operators
// AND &&
// OR ||
// NOT !


// if statement
// let age = 19;
// let profession = "Molvi";
// // if (age >= 18) {
// //     console.log("OK");
// // }
// if (age >= 18)
//     console.log("OK");

// // if else statement
// // if (age >= 18) {
// //     console.log("You are Eligble");
// // } else {
// //     console.log("You are not Eligble");
// // }
// if (age >= 18)
//     console.log("You are Eligble");
// else
//     console.log("You are not Eligble");

// // if ,else if, else;
// let userInput = 9;
// if (userInput === 1) {
//     console.log("Monday");
// } else if (userInput === 2) {
//     console.log("Tuesday");
// } else if (userInput === 3) {
//     console.log("Wednesday");
// } else if (userInput === 4) {
//     console.log("Thursday");
// } else if (userInput === 5) {
//     console.log("Friday");
// } else if (userInput === 6) {
//     console.log("Saturday");
// } else if (userInput === 7) {
//     console.log("Sunday");
// } else {
//     console.log("Invalid week day")
// }

// Ternary operator

// let ternary = age >= 18 ? profession != "Molvi" ? "OK" : "ksabbcakb" : "Not Valid";
// console.log(ternary, "😂");

// if (age >= 18) {
//     if (profession != "Molvi") {
//         console.log("OK")
//     }
// }


//todo Task
//? 1.	Check two given numbers and return true if one of the numbers is 50 or if their sum is 50.
let num1 = 50;
let num2 = 13;
let sum = num1 + num2;

if (num1 === 50 || num2 === 50 || sum === 50) {
    console.log("true")
} else console.log("false")
//? 2.	Check from the given integer, whether it is positive or negative.
let num3 = -23;
if (num3 > 0) console.log("Positive");
else console.log("Negative");
//? 3.	Check whether a given number is even or odd.
let checkEvenOrOdd = 46;
if (checkEvenOrOdd % 2 === 0) console.log("Even Number");
else console.log("Odd Number");
//? 4.	Check whether a given positive number is a multiple of 3.
let num4 = 45;
if (num4 % 3 === 0 && num4 > 0) console.log("YES");
else console.log("No");

//? 5.	Determine whether a given year is a leap year.
// Divisibility by 4: A year is considered a leap year if it is divisible by 4. This is because most years that are multiples of 4 have 366 days, accommodating an extra day for February during leap years.
// Not Divisible by 100: However, there is an exception to the rule above. Century years (years ending in 00) are only leap years if they are divisible by 400. This means that years like 1900, 2100, and 2300 are not leap years even though they are divisible by 4.
// Divisibility by 400: To account for the exception mentioned above, we add another condition. A year is a leap year if it is divisible by 400. This ensures that century years are leap years only when they are truly divisible by 400, such as 2000.

let year = 2020;
if (year % 4 === 0) {
    if (year % 100 !== 0) {
        console.log("True")
    } else if (year % 400 === 0) {
        console.log("True")
    } else { console.log("False") };
} 