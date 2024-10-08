import { Static, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

const UUIDRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const UUIDRegexpSchema = Type.RegExp(UUIDRegex);

export type UUIDRegexpSchema = Static<typeof UUIDRegexpSchema>;

export const validateUUID = (value: unknown) => {
	try {
		return Value.Parse(UUIDRegexpSchema, value);
	} catch (error: any) {
		throw error.message;
	}
};