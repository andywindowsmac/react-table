const path = require('path')

const assetsTransformer = path.join(__dirname, "assetsTransformer.js")
const svgrMock = path.join(__dirname, "svgrMock.js")
const jestCssModules = path.join(__dirname, "jest-css-modules.js")
const setupJest = path.join(__dirname, "setupJest.js")

module.exports = {
  rootDir: process.env.PWD,
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": assetsTransformer,
    "\\.(css|less|scss|sss|styl)$": jestCssModules,
    '\\.svg$': svgrMock,
    "^@Molecules/(.*)": "<rootDir>/src/molecules/$1",
    "^@Atoms/(.*)": "<rootDir>/src/atoms/$1",
    "^@Assets/(.*)": "<rootDir>/src/assets/$1",
  },
  setupFilesAfterEnv: [
    setupJest,
  ],
  transform: {
    '\\.m?jsx?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  automock: false,
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
