import { Static, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

const UriRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

export const UriRegexpSchema = Type.RegExp(UriRegex);

export type UriRegexpSchema = Static<typeof UriRegexpSchema>;

export const validateUri = (value: unknown) => {
	try {
		return Value.Parse(UriRegexpSchema, value);
	} catch (error: any) {
		throw error.message;
	}
};