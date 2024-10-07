import { Static, TSchema, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

export const ArrayNumberSchema = Type.Array(Type.Number());
export const ArrayStringSchema = Type.Array(Type.String());

export type ArrayNumberSchema = Static<typeof ArrayNumberSchema>;
export type ArrayStringSchema = Static<typeof ArrayStringSchema>;

export const validateArray = (schema: TSchema, value: unknown): TSchema => {
	try {
		return Value.Parse(schema, value);
	} catch (error: any) {
		throw error.message;
	}
};
