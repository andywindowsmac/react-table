const { GlobalWithFetchMock } = require('jest-fetch-mock');

const customGlobal = global;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;
