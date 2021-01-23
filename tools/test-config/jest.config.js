module.exports = {
  rootDir: process.env.PWD,
  transform: {
    '\\.m?jsx?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    "**/__tests__/**/*.[t]s?(x)",
    "**/?(*.)+(spec|test).[t]s?(x)",
    "<rootDir>/*.test.tsx",
    "<rootDir>/*.test.ts",
  ],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
}
