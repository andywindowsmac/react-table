const spawn = require('cross-spawn')
const path = require('path')

const configDir = path.join(__dirname, '..', '.storybook')

module.exports = () => spawn(`start-storybook -p 3000 --quiet -c ${configDir}`, {
  stdio: 'inherit',
  shell: true
})
