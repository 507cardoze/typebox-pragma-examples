import { Static, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

export const UndefinedSchema = Type.Undefined();

export type UndefinedType = Static<typeof UndefinedSchema>;

export const validateUndefined = (value: unknown): UndefinedType => {
	try {
		return Value.Parse(UndefinedSchema, value);
	} catch (error: any) {
		throw error.message;
	}
};
