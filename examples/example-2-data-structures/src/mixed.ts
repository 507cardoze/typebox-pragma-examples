import { Static, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

export const ObjectSchema = Type.Object({
    cars: Type.Array(Type.String()),
    years: Type.Array(Type.Number()),
    wasSold: Type.Array(Type.Boolean()),
});

export type ObjectSchema = Static<typeof ObjectSchema>;

export const validateMixed = (value: unknown): ObjectSchema => {
	try {
		return Value.Parse(ObjectSchema, value);
	} catch (error: any) {
		throw error.message;
	}
};
