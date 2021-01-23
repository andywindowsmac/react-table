const spawn = require('cross-spawn')

module.exports = () => spawn(`eslint -c ${__dirname}/../.eslintrc.js --ignore-path ${__dirname}/../.eslintignore ${process.env.PWD}/ --ext ts,tsx --fix`, {
  stdio: 'inherit',
  shell: true
})
