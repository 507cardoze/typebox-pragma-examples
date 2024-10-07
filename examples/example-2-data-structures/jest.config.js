const { pathsToModuleNameMapper } = require('ts-jest');

const TsFile = require('./tsconfig.json');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = () => ({
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  modulePaths: [TsFile.compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(TsFile.compilerOptions.paths, { prefix: '<rootDir>/' }),
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node', 'd.ts'],
});
