//? 1. Input age and print the message “eligible” if the age is valid enough to have a driving license otherwise print “not eligible”.
function checkEligibility(age) {
  if (age >= 16) {
    // Assuming the minimum age to get a driving license is 16 years old
    console.log("eligible");
  } else {
    console.log("not eligible");
  }
}

// Example usage:
checkEligibility(17); // Should print "eligible"
checkEligibility(15); // Should print "not eligible"

//? 2. Input an integer value representing the weekday (1, 2, …, 7), and give the day of the week (Monday, Tuesday, …, Sunday).
function getDayOfWeek(weekdayNumber) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (weekdayNumber < 1 || weekdayNumber > 7) {
    console.log("Invalid weekday number.");
  } else {
    console.log(days[weekdayNumber - 1]);
  }
}

// Example usage:
getDayOfWeek(1); // Should print "Sunday"
getDayOfWeek(7); // Should print "Saturday"

//? 3. Write pseudo code, which input a number, and display its absolute value.
function displayAbsoluteValue(number) {
  if (number >= 0) {
    console.log(number);
  } else {
    console.log(-number);
  }
}

// Example usage:
displayAbsoluteValue(-10); // Should print "10"
displayAbsoluteValue(20); // Should print "20"

//? 4. Check if marks are greater than 80 then print “good luck”, otherwise print “better luck next time”
function checkMarks(marks) {
  if (marks > 80) {
    console.log("good luck");
  } else {
    console.log("better luck next time");
  }
}

// Example usage:
checkMarks(85); // Should print "good luck"
checkMarks(79); // Should print "better luck next time"

//? 5. Check whether a number A is divisible by another number B. Solve these questions in js use if else statement only.
function isDivisible(A, B) {
  if (B === 0) {
    console.log("Cannot divide by zero.");
  } else if (A % B === 0) {
    console.log("The number is divisible.");
  } else {
    console.log("The number is not divisible.");
  }
}

// Example usage:
isDivisible(10, 2); // Should print "The number is divisible."
isDivisible(10, 3); // Should print "The number is not divisible."

//? 7. Julio Cesar Chavez Mark VII is an interplanetary space boxer, who currently holds the championship belts for various weight categories on many different planets within our solar system. However, it is often difficult for him to recall what his "target weight" needs to be on earth in order to make the weight class on other planets. Write a pseudo code to help him keep track of this.
//? It should ask him what his earth weight is, and to enter a number for the planet he wants to fight on. It should then compute his weight on the destination planet based on the table below:
//? So, for example, if Julio weighs 128 lbs. on earth, then he would weigh just under 50 lbs. on Mars, since Mars' gravity is 0.39 times earth's gravity. (128 * 0.39 is 49.92)
//? Sample Run 1
//? Please enter your current earth weight: 128
//? I have information for the following planets:
//?  1. Venus 2. Mars 3. Jupiter
//?  4. Saturn 5. Uranus 6. Neptune
//? Which planet are you visiting? 2
//? Your weight would be 49.92 pounds on that planet

function calculateWeightOnPlanet(earthWeight, planetChoices) {
  if (earthWeight <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  console.log(
    `I have information for the following planets:\n1- Venus\t2-Mars\n3- Jupiter\t4-Saturn\n5- Uranus\t6-Neptune\nWhich planet are you visiting?`
  );

  let newWeignt = 0;
  if (planetChoices < 1 || planetChoices > 6) {
    alert("Please enter a valid option.");
    return;
  } else {
    if (planetChoices === 1) newWeignt = earthWeight * 0.91;
    else if (planetChoices === 2) newWeignt = earthWeight * 0.39;
    else if (planetChoices === 3) newWeignt = earthWeight * 2.64;
    else if (planetChoices === 4) newWeignt = earthWeight * 0.82;
    else if (planetChoices === 5) newWeignt = earthWeight * 0.88;
    else if (planetChoices === 6) newWeignt = earthWeight * 1.19;
  }
  console.log(`Your weight would be ${newWeignt} pounds on that planet.`);
}

// Example usage:
calculateWeightOnPlanet(80, 2);
calculateWeightOnPlanet(67, 5);
calculateWeightOnPlanet(100, 8);

//? 8. An admission charge for The Little Rep Theater varies according to the age of the person. Develop a solution to print the ticket charge given the age of the person. The charges are as follows:
//? a. Over 55: $10.00
//? b. 21–54: $15.00
//? c. 13–20: $10.00
//? d. 3–12: $5.00
//? e. Under 3: Free
function calculateTicketCharge(age) {
  if (age < 3) {
    console.log("Free");
  } else if (age >= 3 && age <= 12) {
    console.log("$5.00");
  } else if (age >= 13 && age <= 20) {
    console.log("$10.00");
  } else if (age >= 21 && age <= 54) {
    console.log("$15.00");
  } else if (age >= 55) {
    console.log("$10.00");
  } else {
    console.log("Invalid age.");
  }
}

// Example usage:
calculateTicketCharge(25); // Should print "$15.00"
calculateTicketCharge(60); // Should print "$10.00"
calculateTicketCharge(8); // Should print "$5.00"
calculateTicketCharge(2); // Should print "Free"

//? 9. Determine the status of students (Safe/Dropped/Probation). Student is dropped if CGPA is less than 1.7, on probation if CGPA is greater than or equal to 1.7 but less than 2.0, otherwise student is safe.
function determineStudentStatus(cgpa) {
  if (cgpa < 1.7) {
    console.log("Dropped");
  } else if (cgpa >= 1.7 && cgpa < 2.0) {
    console.log("Probation");
  } else {
    console.log("Safe");
  }
}

// Example usage:
determineStudentStatus(1.65); // Should print "Dropped"
determineStudentStatus(1.75); // Should print "Probation"
determineStudentStatus(2.05); // Should print "Safe"

//? 10.Input from user three numbers and display on screen the largest, second largest and smallest number of them.
function findLargestSmallestUsingIfElse(numbers) {
  let largest = numbers[0];
  let secondLargest = numbers[0];
  let smallest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
      secondLargest = numbers[i];
    }

    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  console.log(
    `Largest: ${largest}, Second Largest: ${secondLargest}, Smallest: ${smallest}`
  );
}

// Example usage:
findLargestSmallestUsingIfElse([30, 45, 22, 67]); // Should print "Largest: 67, Second Largest: 45, Smallest: 22"

//? 11.Calculate pay of an employee based on the hours worked. The input includes the employee total hours worked this week and his hourly pay rate. The employee is to be paid his basic wage for the first 40 hours worked and 50% more for all the hours above 40 (overtime pay). Output the regular pay, overtime pay, and total pay for the week. If the employee worked 40 hours or less then do not display any information about overtime pay.
function calculateEmployeePay(hoursWorked, hourlyRate) {
  const regularPay =
    hoursWorked <= 40 ? hoursWorked * hourlyRate : 40 * hourlyRate; // Regular pay capped at 40 hours
  const overtimeHours = hoursWorked > 40 ? hoursWorked - 40 : 0; // Calculate overtime hours
  const overtimePay = overtimeHours * hourlyRate * 1.5; // Overtime pay is 50% more

  const totalPay = regularPay + overtimePay;

  if (overtimeHours > 0) {
    console.log(
      `Regular Pay: $${regularPay.toFixed(
        2
      )}, Overtime Pay: $${overtimePay.toFixed(
        2
      )}, Total Pay: $${totalPay.toFixed(2)}`
    );
  } else {
    console.log(
      `Regular Pay: $${regularPay.toFixed(2)}, Total Pay: $${totalPay.toFixed(
        2
      )}`
    );
  }
}

// Example usage:
calculateEmployeePay(45, 15); // Should print "Regular Pay: $675.00, Overtime Pay: $225.00, Total Pay: $900.00"
calculateEmployeePay(38, 20); // Should print "Regular Pay: $760.00, Total Pay: $760.00"
//? 12. Input marks of a student and display the letter grade and grade point.
function calculateGradeAndPoint(marks) {
  if (marks >= 90) {
    console.log("Letter Grade: A, Grade Point: 4.0");
  } else if (marks >= 80) {
    console.log("Letter Grade: B, Grade Point: 3.0");
  } else if (marks >= 70) {
    console.log("Letter Grade: C, Grade Point: 2.0");
  } else if (marks >= 60) {
    console.log("Letter Grade: D, Grade Point: 1.0");
  } else {
    console.log("Letter Grade: F, Grade Point: 0.0");
  }
}

// Example usage:
calculateGradeAndPoint(95); // Should print "Letter Grade: A, Grade Point: 4.0"
calculateGradeAndPoint(85); // Should print "Letter Grade: B, Grade Point: 3.0"

//? 13. A customer needs a specific amount of paper. Following packages are available in market:
//? 1. The charges on the paper are $0.10 for single sheets,
//? 2. $0.055 for amounts in multiples of 100 sheets,
//? 3. $0.04 in multiples of 500 sheets, and
//? 4. $0.03 in multiples of 1000 sheets.
//? Develop a pseudo code to calculate the type and number of package for the least amount of money the customer should buy, given the minimum number of sheets the customer needs. For example, if the customer needs 380 sheets, the amount she would pay when buying at single sheet rate would be $38, and the amount she would pay when buying in multiples of 100 would be $22.00. However, if the customer bought 500 sheets, the cost would be $20.00. It would be cost effective for the customer to buy a package of 500 sheets.
function calculateCheapestPaperPurchase(sheetsNeeded) {
  const pricePerSheet100 = 0.055;
  const pricePerSheet500 = 0.04;
  const pricePerSheet1000 = 0.03;
  const pricePerSheetSingle = 0.1;

  // Calculate the cost for each package size
  const cost100 = Math.floor(sheetsNeeded / 100) * 100 * pricePerSheet100;
  const cost500 = Math.floor(sheetsNeeded / 500) * 500 * pricePerSheet500;
  const cost1000 = Math.floor(sheetsNeeded / 1000) * 1000 * pricePerSheet1000;
  const costSingle = Math.ceil(sheetsNeeded / 100) * 100 * pricePerSheetSingle;

  // Find the cheapest option
  let cheapestCost = Infinity;
  let cheapestOption = "";
  if (cost100 < cheapestCost) {
    cheapestCost = cost100;
    cheapestOption = "100 sheets";
  }
  if (cost500 < cheapestCost) {
    cheapestCost = cost500;
    cheapestOption = "500 sheets";
  }
  if (cost1000 < cheapestCost) {
    cheapestCost = cost1000;
    cheapestOption = "1000 sheets";
  }
  if (costSingle < cheapestCost) {
    cheapestCost = costSingle;
    cheapestOption = "Individual sheets";
  }

  // Output the result
  console.log(
    `The cheapest option is to purchase ${cheapestOption} for a total cost of $${cheapestCost.toFixed(
      2
    )}.`
  );
}

// Example usage:
calculateCheapestPaperPurchase(380); // Should recommend purchasing 100 sheets for a total cost of $22.00
calculateCheapestPaperPurchase(500); // Should recommend purchasing 500 sheets for a total cost of $20.00
calculateCheapestPaperPurchase(480); // Should recommend purchasing 500 sheets for a total cost of $20.00
