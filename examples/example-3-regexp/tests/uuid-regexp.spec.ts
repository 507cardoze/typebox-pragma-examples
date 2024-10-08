import {  validateUUID } from '@src/uuid-regexp';

describe("validateUUID", () => {
    it("It should validate if the UUID is valid", () => {
        const mockValue = "550e8400-e29b-41d4-a716-446655440000";
        expect(validateUUID(mockValue)).toBe(mockValue);
    });

    it('should return error message when invalid properties are provided', () => {
		const mockValue = null;
		const expectedErrorMessage = 'Expected string';
		expect(() => validateUUID(mockValue)).toThrow(
			expectedErrorMessage
		);
	});
});