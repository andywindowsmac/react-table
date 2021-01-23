const spawn = require('cross-spawn')

module.exports = () => spawn('rollup -c node:@react-table/rollup-config/rollup.config.js', {
  stdio: 'inherit',
  shell: true
})
