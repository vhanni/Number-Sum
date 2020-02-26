const run = require('./solution');
const expect = require('expect');

describe('Hello World', () => {
  it('should return Hello, World!', () => {
    expect(run()).toEqual('Hello, World!');
  });
});