function negativePositive(input) {
  // Convert string elements to numbers
  const numbers = input.map(Number);

  // Initialize arrays to hold negative and non-negative elements
  const negativeArray = [];
  const nonNegativeArray = [];

  // Process each element
  for (const num of numbers) {
    if (num < 0) {
      // Negative numbers are appended to the beginning
      negativeArray.unshift(num);
    } else {
      // Non-negative numbers (including 0) are appended to the end
      nonNegativeArray.push(num);
    }
  }

  // Concatenate the two arrays to create the final result
  const resultArray = negativeArray.concat(nonNegativeArray);

  // Print each element on a new line
  resultArray.forEach((num) => console.log(num));
}

// Example input: negativePositive(["7", "-2", "8", "9"]);
negativePositive(["7", "-2", "8", "9"]);