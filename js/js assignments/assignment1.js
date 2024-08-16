//? 1. Input four numbers and display sum of these.
let num1 = 3;
let num2 = 6;
let num3 = 2;
let num4 = 7;
let sum = num1 + num2 + num3 + num4;
console.log("Sum of 4 number is: ", sum);

//? 2. Input marks of five subjects of a student and calculate its average.
let math = 85;
let english = 90;
let urdu = 78;
let computer = 92;
let islamiat = 88;
let average = (math + english + urdu + computer + islamiat) / 5;
console.log(`The average mark is ${average}`);

//? 3. Input radius of circle and calculate area of circle.
let radius = 5;
const PI = 3.14; // Example radius
const area = PI * (radius ** 2);
console.log(`The area of the circle is ${area}`);

//? 4. Take input from user about temperature in Celsius and display on screen the equivalentFahrenheit temperature.
const tempC = 25; // Example temperature in Celsius
const tempF = (tempC * 9 / 5) + 32;
console.log(`${tempC} degrees Celsius is equal to ${tempF} degrees Fahrenheit`);

//? 5. Calculate the pay of an employee, given the hours worked and rate per hour.
let hoursWorked = 40; // Example hours worked
let ratePerHour = 1500; // Example rate per hour
const pay = hoursWorked * ratePerHour;
console.log(`Employee's pay is ${pay}Rs`);

//? 6. A painter wants to know the amount of paint needed to paint only the four walls. Each wall has same rectangular area. The chosen paint covers 100 square feet per gallon.
let priceOfOnePaintBox = 500;
const totalWalls = 4;
const painBoxCovers = 100;
let areaOfOneWall = 450;
let calcPrice = ((areaOfOneWall / painBoxCovers) * totalWalls) * priceOfOnePaintBox;
console.log("The amount of paint needed to paint only the four walls is: ", calcPrice, "Rs");

//? 7. Bob would like to know what percentage of his income his rent is. Write a pseudo code which will calculate and print the required percentage.
let income = 50000; // Example income
let rent = 8000; // Example rent
const percentageRent = (rent / income) * 100;
console.log(`${percentageRent}% of your income goes towards rent.`);

//? 8. Write pseudo code to calculate circumference of circle.
let radius2 = 5; // Example radius
const circumference = 2 * PI * radius2;
console.log(`The circumference of the circle is ${circumference}`);

//? 9. Write a program that input a number and prints a multiplication table for the entered number up to 10.
//? Sample Run:
//? Enter Table Number: 5
//? 5 * 1 = 5
//? 5 * 2 = 10
//? 5 * 3 = 15
//? 5 * 4 = 20
//? 5 * 5 = 25
//? 5 * 6 = 30
//? 5 * 7 = 35
//? 5 * 8 = 40
//? 5 * 9 = 45
//? 5 * 10 = 50
let numTable = 14;
// console.log(numTable, " *    1   = " , numTable * 1);
console.log(`${numTable} *    1   =  ${numTable * 1}`);
console.log(`${numTable} *    2   =  ${numTable * 2}`);
console.log(`${numTable} *    3   =  ${numTable * 3}`);
console.log(`${numTable} *    4   =  ${numTable * 4}`);
console.log(`${numTable} *    5   =  ${numTable * 5}`);
console.log(`${numTable} *    6   =  ${numTable * 6}`);
console.log(`${numTable} *    7   =  ${numTable * 7}`);
console.log(`${numTable} *    8   =  ${numTable * 8}`);
console.log(`${numTable} *    9   =  ${numTable * 9}`);
console.log(`${numTable} *    10   =  ${numTable * 10}`);

//? 10.Jim is going to replant his lawn. He would like to know how much the sod will cost, given cost of the sod per square feet and the length and width of two different lawn areas in feet. Write a solution to calculate this cost.
let sodPrice = 0.5;
let length1 = 100;
let width1 = 50;
let length2 = 80;
let width2 = 60;
const area1 = length1 * width1;
const area2 = length2 * width2;
const totalSodCost = (area1 + area2) * sodPrice;
console.log(`The total cost of sod for both lawns is $${totalSodCost}.`);