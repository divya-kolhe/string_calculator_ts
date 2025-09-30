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

  it('returns sum for many numbers', () => {
    const calc = new StringCalculator();
    expect(calc.add('1,2,3,4,10')).toBe(20);
    });

  it('handles newlines between numbers', () => {
    const calc = new StringCalculator();
    expect(calc.add('1\n2,3')).toBe(6);
    });

  it('supports custom delimiter', () => {
    const calc = new StringCalculator();
    expect(calc.add('//;\n1;2')).toBe(3);
    });
});
