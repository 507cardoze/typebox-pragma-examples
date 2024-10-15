import { Type } from '@sinclair/typebox';
import { SchemaValidator } from '@src/schema-validator';

describe('SchemaValidator', () => {
  const testSchema = Type.Object({
    name: Type.String(),
    age: Type.Number(),
  });

  const validData = {
    name: 'John Doe',
    age: 30,
  };

  const invalidData = {
    name: 'John Doe',
    age: 'thirty',
  };

  beforeEach(() => {
    SchemaValidator.clearValidators();
  });

  describe('validate', () => {
    it('should validate data correctly and return data when valid', () => {
      const validator = new SchemaValidator();
      const result = validator.validate(validData, testSchema);

      expect(result).toEqual({
        data: validData,
        error: null,
      });
    });

    it('should return an error when data is invalid', () => {
      const validator = new SchemaValidator();
      const result = validator.validate(invalidData, testSchema);

      expect(result).toEqual({
        error: 'Expected number at /age',
      });
    });
  });

  describe('validateThrow', () => {
    it('should validate data correctly and return data when valid', () => {
      const validator = new SchemaValidator();
      const result = validator.validateThrow(validData, testSchema);

      expect(result).toEqual(validData);
    });

    it('should throw an error when data is invalid', () => {
      const validator = new SchemaValidator();

      expect(() => validator.validateThrow(invalidData, testSchema)).toThrow('Expected number at /age');
    });
  });

  describe('getValidator', () => {
    it('should return a validator for the given schema', () => {
      const validator = SchemaValidator.getValidator(testSchema);

      expect(validator).toBeDefined();
      expect(validator.Check(validData)).toBe(true);
    });
  });

  describe('addValidators', () => {
    it('should add validators for the given schemas', () => {
      SchemaValidator.addValidators([testSchema]);

      const validator = SchemaValidator.getValidator(testSchema);

      expect(validator).toBeDefined();
      expect(validator.Check(validData)).toBe(true);
    });
  });
});