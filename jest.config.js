const { defaults } = require('jest-config');

module.exports = {
    moduleFileExtensions: [
        ...defaults.moduleFileExtensions,
        'js',
        'json',
        'jsx',
        'ts',
        'tsx',
        'node'
    ],
    moduleDirectories: ['node_modules', 'src'],
    testEnvironment: 'jsdom',
    clearMocks: true,
    testTimeout: 3000,
    collectCoverage: true,
    testResultsProcessor: 'jest-sonar-reporter',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    coverageDirectory: '<rootDir>/coverage/'
};
