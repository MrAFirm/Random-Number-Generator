function getRandomNumber(min, max) {
  // Ensure min is less than or equal to max
  if (min > max) {
    [min, max] = [max, min]; // Swap values if min is greater
  }

  // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
  const randomDecimal = Math.random();

  // Scale the decimal to the desired range and round to the nearest integer
  return Math.floor(randomDecimal * (max - min + 1)) + min;
}

// Example usage:
const randomNumber = getRandomNumber(1, 100); // Generate a random number between 1 and 100
console.log("Your random number is:", randomNumber);
