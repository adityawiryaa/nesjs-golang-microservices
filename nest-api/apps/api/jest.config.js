module.exports = {
  name: "api",
  preset: "../../jest.config.js",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json"
    }
  },
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  moduleNameMapper: {
    "@root/(.*)": "<rootDir>/src/$1",
    "@infrastructure/(.*)": "<rootDir>/src/infrastructure/$1"
  }
}
