import { validateWithError, validateWithAllErrors } from '@src/type-compile';

describe('validateWithError', () => {
	test('should return undefined', () => {
		const schema = {
			x: 1,
			y: 2,
			z: 3,
		};
		const result = validateWithError(schema);
		expect(result).toBeUndefined();
	});
	test('should return error', () => {
		const schema = {
			x: 1,
			y: 2,
			z: '3',
		};
		//@ts-expect-error
		const result = validateWithError(schema);
		expect(result).toEqual('Expected number');
	});
});
describe('validateWithAllErrors', () => {
	test('should return empty array', () => {
		const schema = {
			x: 1,
			y: 2,
			z: 3,
		};
		const result = validateWithAllErrors(schema);
		expect(result).toEqual([]);
	});
	test('should return array with errors', () => {
		const schema = {
			x: 1,
			y: 2,
			z: '3',
		};
		//@ts-expect-error
		const result = validateWithAllErrors(schema);

        result.forEach((error) => {
            expect(error.message).toEqual('Expected number');
        });
		
	});
});
