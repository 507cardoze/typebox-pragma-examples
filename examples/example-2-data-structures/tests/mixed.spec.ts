import { validateMixed } from '@src/mixed';

describe('validateMixed', () => {
	it('Should validate if the object got all the properties correct typing', () => {
		const mockValue = {
            cars: ['audi', 'bmw', 'mercedes'],
            years: [2010, 2015, 2020],
            wasSold: [true, false, true],
        };
		const result = validateMixed(mockValue);
		expect(result).toEqual(mockValue);
	});

    it('Should validate is the schema do not match', () => {
        const mockValue = {
            cars: [2010, 2015, 2020],
            years: ['audi', 'bmw', 'mercedes'],
            wasSold: [true, false, true],
        };
        const expectedErrorMessage = 'Expected number';
        expect(() => validateMixed(mockValue)).toThrow(expectedErrorMessage);
    });

	it('should return error message when invalid properties are provided', () => {
		const mockValue = 'Im not a object';
		const expectedErrorMessage = 'Expected object';
		expect(() => validateMixed(mockValue)).toThrow(expectedErrorMessage);
	});
});
