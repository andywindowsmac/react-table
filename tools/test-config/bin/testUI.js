const spawn = require('cross-spawn')
const path = require('path')

const configPath = path.join(__dirname, '..', 'jest.config.ui.js')
const config = `--config ${configPath}`

const otherArgs = `--silent --passWithNoTests --runInBand --detectOpenHandles --forceExit --colors`

module.exports = (otherArgsStringified) => spawn(`jest ${config} ${otherArgs} ${otherArgsStringified}`, {
  stdio: 'inherit',
  shell: true
})
