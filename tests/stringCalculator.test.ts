import { StringCalculator } from "../src/stringCalculator";

describe('StringCalculator', () => {
  it('returns 0 for empty string', () => {
  const calc = new StringCalculator();
  expect(calc.add('')).toBe(0);
  });
  });
