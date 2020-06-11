module.exports = {
  // Load setup-tests.js before test execution
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],

  // ...
};
