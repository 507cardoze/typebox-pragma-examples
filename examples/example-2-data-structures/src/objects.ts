import { Static, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

export const ObjectSchema = Type.Object({
    name: Type.String(),
    age: Type.Number(),
    isStudent: Type.Boolean(),
});

export type ObjectSchema = Static<typeof ObjectSchema>;

export const validateObject = (value: unknown): ObjectSchema => {
	try {
		return Value.Parse(ObjectSchema, value);
	} catch (error: any) {
		throw error.message;
	}
};
