#!/usr/bin/env node

const test = require('./test')
const testUI = require('./testUI')

const argv = require('minimist')(process.argv.slice(2), {
  alias: {
    type: 'type',
    v: 'version',
    h: 'help'
  }
})

const projectType = argv['type'] ? argv['type'][0] : ''
const { type: _, _: unused, ...otherArgs } = argv

const otherArgsStringified = Object.keys(otherArgs).reduce((acc, key) => {
  const newArg = `--${key}`
  if (typeof otherArgs[key] === 'boolean') {
    return `${acc} ${newArg}`
  }

  return `${acc} ${newArg} ${otherArgs[key]}`
}, '')

switch(projectType) {
  case 'ui':
    testUI(otherArgsStringified)
    break
  default:
    test(otherArgsStringified)
}
