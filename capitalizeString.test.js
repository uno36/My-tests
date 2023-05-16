const capitalize = require('./capitalizeString');

test('capitalize function capitalizes the first character of a string', () => {
  const result = capitalize('hello');
  expect(result).toBe('Hello');
});
