const test = require('node:test');
const assert = require('node:assert/strict');
const { sum, Subtractor, multiply, divide } = require('../src/index');

test('sum adds two numbers', () => {
  assert.equal(sum(2, 3), 5);
});

test('Subtractor subtracts two numbers', () => {
  const subtractor = new Subtractor();
  assert.equal(subtractor.subtract(8, 3), 5);
});

test('multiply multiplies two numbers', () => {
  assert.equal(multiply(3, 4), 12);
});

test('divide divides two numbers', () => {
  assert.equal(divide(10, 2), 5);
});

test('divide throws on division by zero', () => {
  assert.throws(() => divide(5, 0), /Division by zero is not allowed/);
});
