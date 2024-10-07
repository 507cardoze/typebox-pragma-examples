import {
	validateArray,
	ArrayNumberSchema,
	ArrayStringSchema,
} from '@src/arrays';

describe('validateArray', () => {
	it('Should validate if the array is an array of numbers', () => {
		const mockValue = [1, 2, 3];
		const result = validateArray(ArrayNumberSchema, mockValue);
		expect(result).toEqual(mockValue);
	});

	it('Should validate if the array is an array of strings', () => {
		const mockValue = ['a', 'b', 'c'];
		const result = validateArray(ArrayStringSchema, mockValue);
		expect(result).toEqual(mockValue);
	});

	it('should return error message when invalid properties are provided', () => {
		const mockValue = 'Im not a object';
		const expectedErrorMessage = 'Expected number';
		expect(() => validateArray(ArrayNumberSchema, mockValue)).toThrow(
			expectedErrorMessage
		);
	});

    it('should return error message when invalid properties are provided', () => {
		const mockValue = null;
		const expectedErrorMessage = 'Expected string';
		expect(() => validateArray(ArrayStringSchema, mockValue)).toThrow(
			expectedErrorMessage
		);
	});
});
