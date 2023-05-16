const Calculator = require('./simpleCalculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds negative and positive numbers correctly', () => {
      expect(calculator.add(-5, 7)).toBe(2);
    });

    test('adds two decimal numbers correctly', () => {
      expect(calculator.add(1.5, 2.75)).toBeCloseTo(4.25);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('subtracts negative and positive numbers correctly', () => {
      expect(calculator.subtract(-5, 7)).toBe(-12);
    });

    test('subtracts two decimal numbers correctly', () => {
      expect(calculator.subtract(5.6, 3.2)).toBeCloseTo(2.4);
    });
  });

  describe('divide', () => {
    test('divides two numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(8, 0)).toThrow(
        'Division by zero is not allowed.'
      );
    });

    test('divides two decimal numbers correctly', () => {
      expect(calculator.divide(7.5, 1.5)).toBeCloseTo(5);
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('multiplies negative and positive numbers correctly', () => {
      expect(calculator.multiply(-5, 7)).toBe(-35);
    });

    test('multiplies two decimal numbers correctly', () => {
      expect(calculator.multiply(1.5, 2.5)).toBeCloseTo(3.75);
    });
  });
});
