import { Static, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

export const StringSchema = Type.String();

export type StringType = Static<typeof StringSchema>;

export const validateString = (value: unknown): StringType => {
	try {
		return Value.Parse(StringSchema, value);
	} catch (error: any) {
		throw error.message;
	}
};
