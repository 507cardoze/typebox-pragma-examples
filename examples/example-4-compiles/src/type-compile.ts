import { Static, Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';

const compileSchema = Type.Object({
	x: Type.Number(),
	y: Type.Number(),
	z: Type.Number(),
});

type compileSchema = Static<typeof compileSchema>;

const validate = TypeCompiler.Compile(compileSchema);

export const validateWithError = (value: compileSchema) => validate.Errors(value).First()?.message;

export const validateWithAllErrors = (value: compileSchema) => [
	...validate.Errors(value),
];
