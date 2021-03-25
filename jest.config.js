module.exports = {
  transform: {
    '\\.(js|jsx)?$': 'babel-jest'
  },
  testMatch: [ 
    '**/__tests__/**/*.(js|ts|tsx)', 
    '**/?(*.)+(spec|test).(js|ts|tsx)', 
  ], 
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/config/jest/mocks/styleMock.js',
  }
};