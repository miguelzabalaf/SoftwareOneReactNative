module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-config)/)',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFiles: ['./jest.config.js'],
  testMatch: ['**/*.test.(js|ts|tsx)'],
  fakeTimers: {
    legacyFakeTimers: true,
  },
};
