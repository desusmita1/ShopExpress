export default {
  testEnvironment: 'jsdom', // Changed from 'node' to 'jsdom'
  setupFilesAfterEnv: ['<rootDir>/frontend/src/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};