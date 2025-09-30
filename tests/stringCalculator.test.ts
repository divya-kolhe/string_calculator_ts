import { StringCalculator } from "../src/stringCalculator";

describe('StringCalculator', () => {
  it('returns 0 for empty string', () => {
  const calc = new StringCalculator();
  expect(calc.add('')).toBe(0);
  });

  it('returns the number itself for single input', () => {
    const calc = new StringCalculator();
    expect(calc.add('1')).toBe(1);
    });

  it('returns sum for two numbers', () => {
    const calc = new StringCalculator();
    expect(calc.add('1,5')).toBe(6);
    });
});
