const reverseString = require('./reverseString');

test('reverses a string', () => {
    const string = 'Hello, Micronauts!';
    const reversed = reverseString(string);
    expect(reversed).toBe('!stuanorciM ,olleH');
});

