import { validateObject } from '@src/objects';

describe('validateObject', () => {
  it('Should validate if the object has the required properties', () => {
    const mockValue = {
        name: 'John Doe',
        age: 30,
        isStudent: true,
    };
    const result = validateObject(mockValue);
    expect(result).toEqual(mockValue);
  });

  it('Should validate if any property is missing', () => {
    const mockValue = {
        name: 'John Doe',
        age: 30,
    };
    const expectedErrorMessage = 'Expected required property';
    expect(() => validateObject(mockValue)).toThrow(expectedErrorMessage);
  });

  it('should return error message when invalid properties are provided', () => {
    const mockValue = null;
    const expectedErrorMessage = 'Expected object';
    expect(() => validateObject(mockValue)).toThrow(expectedErrorMessage);
  });
});