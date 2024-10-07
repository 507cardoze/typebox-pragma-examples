import { validateBoolean } from '@src/boolean';

describe('validateBoolean', () => {
  it('should return parsed value when valid Boolean is provided', () => {
    const mockValue = true;
    const result = validateBoolean(mockValue);
    expect(result).toBe(mockValue);
  });

  it('should return error message when invalid Boolean is provided', () => {
    const mockValue = null;
    const expectedErrorMessage = 'Expected boolean';
    expect(() => validateBoolean(mockValue)).toThrow(expectedErrorMessage);
  });
});