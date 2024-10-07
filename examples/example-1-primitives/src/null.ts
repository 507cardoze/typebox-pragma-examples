import { Static, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

export const NullSchema = Type.Null();

export type NullType = Static<typeof NullSchema>;

export const validateNull = (value: unknown): NullType => {
	try {
		return Value.Parse(NullSchema, value);
	} catch (error: any) {
		throw error.message;
	}
};
