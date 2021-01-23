const spawn = require('cross-spawn')

module.exports = () => spawn(`stylelint '${process.env.PWD}/**/*.scss' --config ${__dirname}/../.stylelintrc.js --ignore-path ${__dirname}/../.stylelintignore --fix`, {
  stdio: 'inherit',
  shell: true
})
