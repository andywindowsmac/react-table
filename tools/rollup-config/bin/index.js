#!/usr/bin/env node

const build = require('./build')
const buildUI = require('./buildUi')

const argv = require('minimist')(process.argv.slice(2), {
  alias: {
    type: 'type',
    v: 'version',
    h: 'help'
  }
})

const projectType = argv['type'] ? argv['type'][0] : ''

switch(projectType) {
  case 'ui':
    buildUI()
    break
  default:
    build()
}
