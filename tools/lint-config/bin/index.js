#!/usr/bin/env node

const lintReact = require('./lintReact')
const lintJS = require('./lintJs')
const lintCSS = require('./lintCSS')
const lintFixJS = require('./lintFixJs')
const lintFixReact = require('./lintFixReact')
const lintFixCSS = require('./lintFixCSS')

const argv = require('minimist')(process.argv.slice(2), {
  alias: {
    type: 'type',
    v: 'version',
    h: 'help'
  }
})

const projectType = argv['type'] ? argv['type'][0] : ''

switch(projectType) {
  case 'react':
    lintReact()
    break
  case 'fixReact':
    lintFixReact()
    break
  case 'js':
    lintJS()
    break
  case 'fixJS':
    lintFixJS()
    break
  case 'css':
    lintCSS()
    break
  case 'fixCSS':
    lintFixCSS()
    break
}
