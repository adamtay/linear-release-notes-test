const test = require('node:test');
const assert = require('node:assert/strict');
const { sum, Subtractor, multiply } = require('../src/index');

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
