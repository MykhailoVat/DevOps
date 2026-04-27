export default {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js"],
  transform: {},
  //extensionsToTreatAsEsm: [".js"],
  testTimeout: 10000,
  detectOpenHandles: true,
  verbose: true,
  testPathIgnorePatterns: ["/node_modules/"],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40
    }
  }
};