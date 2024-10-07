import { validateNull } from '@src/null';

describe('validateNull', () => {
  it('should return parsed value when valid Null is provided', () => {
    const mockValue = null;
    const result = validateNull(mockValue);
    expect(result).toBe(mockValue);
  });

  it('should return error message when invalid Null is provided', () => {
    const mockValue = true;
    const expectedErrorMessage = 'Expected null';
    expect(() => validateNull(mockValue)).toThrow(expectedErrorMessage);
  });
});