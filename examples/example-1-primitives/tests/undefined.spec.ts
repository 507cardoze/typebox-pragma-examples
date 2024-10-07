import { validateUndefined } from '@src/undefined';

describe('validateUndefined', () => {
  it('should return parsed value when valid Undefined is provided', () => {
    const mockValue = undefined;
    const result = validateUndefined(mockValue);
    expect(result).toBe(mockValue);
  });

  it('should return error message when invalid Undefined is provided', () => {
    const mockValue = null;
    const expectedErrorMessage = 'Expected undefined';
    expect(() => validateUndefined(mockValue)).toThrow(expectedErrorMessage);
  });
});