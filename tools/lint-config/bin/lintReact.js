const spawn = require('cross-spawn')

module.exports = () => spawn(`eslint -c ${__dirname}/../.eslintrc_react.js --ignore-path ${__dirname}/../.eslintignore ${process.env.PWD}/ --ext ts,tsx`, {
  stdio: 'inherit',
  shell: true
})
