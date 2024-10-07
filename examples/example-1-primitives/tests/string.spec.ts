import { validateString } from '@src/string';

describe('validateString', () => {
  it('should return parsed value when valid String is provided', () => {
    const mockValue = "This is a long string.";
    const result = validateString(mockValue);
    expect(result).toBe(mockValue);
  });

  it('should return error message when invalid String is provided', () => {
    const mockValue = null;
    const expectedErrorMessage = 'Expected string';
    expect(() => validateString(mockValue)).toThrow(expectedErrorMessage);
  });
});