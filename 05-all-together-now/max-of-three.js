// Max of Three
// Write a function maxOfThree that accepts three number arguments.
// maxOfThree should return largest number of the three.

// Example:
// maxOfThree(5, 4, 10); // => 10
// maxOfThree(7, 7, 4); // => 7

// YOUR CODE BELOW
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  }
  if (num2 > num1 && num2 > num3) {
    return num2;
  }
  if (num3 > num2 && num3 > num1) {
    return num3;
  }
}
// Do not change the code below
module.exports = { maxOfThree };

// this is a test!!!
