import type { CalculationResult } from './CalculationResult';

export class MathOperation {
  static add(addend1: number, addend2: number): CalculationResult {
    const result = addend1 + addend2;
    return { result };
  }

  static subtract(minuend: number, subtrahend: number): CalculationResult {
    const result = minuend - subtrahend;
    return { result };
  }

  static multiply(multiplier: number, multiplicand: number): CalculationResult {
    const result = multiplier * multiplicand;
    return { result };
  }

  static divide(dividend: number, divisor: number): CalculationResult {
    if (divisor === 0) {
      return { error: 'Cannot divide by zero' };
    }

    const result = dividend / divisor;
    return { result };
  }
}
