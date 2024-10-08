import {  validateEmail } from '@src/email-regexp';

describe("validateEmail", () => {
    it("It should validate if the email is valid", () => {
        const mockValue = "pragmatic@pragma.com.co";
        expect(validateEmail(mockValue)).toBe(mockValue);
    });

    it('should return error message when invalid properties are provided', () => {
		const mockValue = null;
		const expectedErrorMessage = 'Expected string';
		expect(() => validateEmail(mockValue)).toThrow(
			expectedErrorMessage
		);
	});
});