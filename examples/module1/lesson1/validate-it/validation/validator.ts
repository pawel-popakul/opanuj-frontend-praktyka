import ValidationRules from './validation-rules';
import {
  MESSAGE_ERROR_INVALID_INPUT,
  MESSAGE_ERROR_INVALID_INT,
  MESSAGE_SUCCESS_VALID_INT,
} from './messages';

export class Validator {
  private input: HTMLInputElement;
  private validationBtn: HTMLButtonElement;
  private cleanupBtn: HTMLButtonElement;
  private result: HTMLDivElement;

  constructor() {
    this.input = document.getElementById('input') as HTMLInputElement;
    this.validationBtn = document.getElementById(
      'validation-btn'
    ) as HTMLButtonElement;
    this.cleanupBtn = document.getElementById(
      'cleanup-btn'
    ) as HTMLButtonElement;
    this.result = document.getElementById('result') as HTMLDivElement;

    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.validationBtn.addEventListener('click', () => this.handleValidation());
    this.cleanupBtn.addEventListener('click', () => this.cleanup());
  }

  private handleValidation() {
    this.result.textContent = this.validate(this.input.value);
  }

  private cleanup() {
    this.input.value = '';
    this.result.textContent = '';
  }

  private validate(value: string) {
    if (!this.isValidInput(value)) {
      return MESSAGE_ERROR_INVALID_INPUT;
    }

    if (!this.isValidInt(Number(value))) {
      return MESSAGE_ERROR_INVALID_INT;
    }

    return MESSAGE_SUCCESS_VALID_INT;
  }

  private isValidInput(value: string) {
    return ValidationRules.inputValidationRules.every((rule) => rule(value));
  }

  private isValidInt(value: number) {
    return ValidationRules.intValidationRules.every((rule) => rule(value));
  }
}

export default Validator;
