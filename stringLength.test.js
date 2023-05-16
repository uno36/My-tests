const stringLength = require('./stringLength');

test('stringLength function returns the correct length of a string', () => {
  const string = "Hello, Jon";
  const result = stringLength(string);
  expect(result).toBe(10);
});

test('stringLength function throws an error if string length is out of range', () => {
  const string = "This is a very long string.";
  expect(() => stringLength(string)).toThrow(
    'String length must be between 1 and 10 characters.'
  );
});

test('stringLength function throws an error if string length is too short', () => {
  const string = "";
  expect(() => stringLength(string)).toThrow(
    'String length must be between 1 and 10 characters.'
  );
});
