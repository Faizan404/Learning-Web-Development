function getRandomNumberBetween1And10() {
  // Generate a random float between 0 (inclusive) and 1 (exclusive)
  const randomNumber = Math.random();

  // Scale the number to be between 0 (inclusive) and 10 (exclusive)
  const scaledRandomNumber = randomNumber * 10;

  // Round the number to the nearest integer
  const roundedNumber = Math.round(scaledRandomNumber);

  // Adjust the range to be between 1 (inclusive) and 11 (exclusive)
  const finalNumber = roundedNumber + 1;

  // Ensure the number is within the desired range [1, 10]
  if (finalNumber > 10) {
    return getRandomNumberBetween1And10(); // Recursively call the function until a valid number is generated
  }

  return finalNumber;
}

// Asynchronous
(function learingPromises() {


//   let lottery = new Promise((resolve, reject) => {
//     if (getRandomNumberBetween1And10() < 2) reject("Rejected");
//     else resolve("Accepted");
//   });
//   console.log(
//     lottery
//       .then((x) => console.log(x))
//       .catch((err) => console.log(err))
//       .finally((y) => console.log("Promises"))
//   );
})();
