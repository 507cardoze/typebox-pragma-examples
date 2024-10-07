import { validateNumber } from '@src/number';

describe('validateNumber', () => {
  it('should return parsed value when valid number is provided', () => {
    const mockValue = 123;
    const result = validateNumber(mockValue);
    expect(result).toBe(mockValue);
  });

  it('should return parsed value when valid number is provided even as strings but a valid number', () => {
    const mockValue = "123";
    const result = validateNumber(mockValue);
    expect(result).toBe(Number(mockValue));
  });

  it('should return error message when invalid number is provided', () => {
    const mockValue = 'Im not a number';
    const expectedErrorMessage = 'Expected number';
    expect(() => validateNumber(mockValue)).toThrow(expectedErrorMessage);
  });
});