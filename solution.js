const run = require('./solution');
const expect = require('expect');

describe('Sample Exercise', () => {
  it('should return the sum of two numbers', () => {
    expect(run(1,2)).toEqual(3);
  });
});
