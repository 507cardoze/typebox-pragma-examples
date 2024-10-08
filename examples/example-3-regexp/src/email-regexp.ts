import { Static, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const EmailRegexpSchema = Type.RegExp(emailRegex);

export type EmailRegexpSchema = Static<typeof EmailRegexpSchema>;

export const validateEmail = (value: unknown) => {
	try {
		return Value.Parse(EmailRegexpSchema, value);
	} catch (error: any) {
		throw error.message;
	}
};