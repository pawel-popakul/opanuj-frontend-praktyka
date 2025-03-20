class ValidationRules {
  private static nonEmpty(value: string): boolean {
    return value !== '';
  }

  private static isInteger(value: string): boolean {
    return Number.isInteger(Number(value));
  }

  private static min(minValue: number) {
    return (value: number): boolean => value >= minValue;
  }

  private static max(maxValue: number) {
    return (value: number): boolean => value <= maxValue;
  }

  private static isEven(value: number): boolean {
    return value % 2 === 0;
  }

  static inputValidationRules = [this.nonEmpty, this.isInteger];

  static intValidationRules = [this.min(0), this.max(100), this.isEven];
}

export default ValidationRules;
