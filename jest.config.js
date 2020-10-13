module.exports = {
	preset: "jest-preset-angular",
	testFilesAfterEnv: [
		"<rootDir>/test-jest.ts"
	],
	transformIgnorePatterns: [
		"node_modules/(?!@ngrx|ngx-socket-io)" // Last any packages here that error
	],
	transform: {
		"^.+\\.(ts|js|html)$": "ts-jest"
	},
	testPathIgnorePatterns: [
		"<rootDir>/node_modules/",
		"<rootDir>/dist/",
		"<rootDir>/cypress/",
		"<rootDir>/src/test.ts",
	]
};

const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/my-app',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  })
};