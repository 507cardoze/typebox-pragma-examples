import { Static, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

export const BooleanSchema = Type.Boolean();

export type BooleanType = Static<typeof BooleanSchema>;

export const validateBoolean = (value: unknown): BooleanType => {
	try {
		return Value.Parse(BooleanSchema, value);
	} catch (error: any) {
		throw error.message;
	}
};
