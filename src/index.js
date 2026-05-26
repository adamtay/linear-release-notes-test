function sum(a, b) {
  return a + b;
}

/**
 * Performs subtraction operations.
 */
class Subtractor {
  /**
   * Subtracts the second number from the first number.
   *
   * @param {number} a - The minuend.
   * @param {number} b - The subtrahend.
   * @returns {number} The subtraction result.
   */
  subtract(a, b) {
    return a - b;
  }
}

function multiply(a, b) {
  return a * b;
}

module.exports = { sum, Subtractor, multiply };
