module.exports = {
  roots: ['<rootDir>/config/jest'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest'
  },
  testMatch: ['<rootDir>/src/**/*.(spec|test).js?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/config/jest/mocks/styleMock.js',
  }
};