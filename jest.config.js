module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
        '\\.(css|less|scss)$': '<rootDir>src/Tests/unit/mocks/styleMock.js',
      },
    testEnvironment: 'jsdom',
  };