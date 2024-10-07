import { Static, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

export const NumberSchema = Type.Number();

export type NumberType = Static<typeof NumberSchema>;

export const validateNumber = (value: unknown): NumberType => {
	try {
		return Value.Parse(NumberSchema, value);
	} catch (error: any) {
		throw error.message;
	}
};
