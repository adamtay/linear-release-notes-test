const test = require('node:test');
const assert = require('node:assert/strict');
const { sum, Subtractor } = require('../src/index');

test('sum adds two numbers', () => {
  assert.equal(sum(2, 3), 5);
});

test('Subtractor subtracts two numbers', () => {
  const subtractor = new Subtractor();
  assert.equal(subtractor.subtract(8, 3), 5);
});
