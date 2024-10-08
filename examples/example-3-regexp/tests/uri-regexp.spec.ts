import {  validateUri } from '@src/uri-regexp';

describe("validateUri", () => {
    it("It should validate if the URI is valid", () => {
        const mockValue = "https://example.com";
        expect(validateUri(mockValue)).toBe(mockValue);
    });

    it('should return error message when invalid properties are provided', () => {
		const mockValue = null;
		const expectedErrorMessage = 'Expected string';
		expect(() => validateUri(mockValue)).toThrow(
			expectedErrorMessage
		);
	});
});