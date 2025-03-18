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

  static inputValidationRules = [
    ValidationRules.nonEmpty,
    ValidationRules.isInteger,
  ];

  static intValidationRules = [
    ValidationRules.min(0),
    ValidationRules.max(100),
    ValidationRules.isEven,
  ];
}

export default ValidationRules;
