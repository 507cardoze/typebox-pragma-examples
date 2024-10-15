import { Static, Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';

const compileSchema = Type.Object({
	x: Type.Number(),
	y: Type.Number(),
	z: Type.Number(),
});

type compileSchema = Static<typeof compileSchema>;

export const validateWithError = (value: compileSchema) =>
	TypeCompiler.Compile(compileSchema).Errors(value).First()?.message;

export const validateWithAllErrors = (value: compileSchema) => [
	...TypeCompiler.Compile(compileSchema).Errors(value),
];
