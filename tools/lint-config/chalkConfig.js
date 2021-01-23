// Centralized configuration for chalk, which is used to add color to console.log statements.
import chalk from 'chalk'

const red = (...args) => console.log(chalk.red(...args))
const green = (...args) => console.log(chalk.green(...args))
const yellow  = (...args) => console.log(chalk.yellow(...args))
const blue = (...args) => console.log(chalk.blue(...args))

export {
  red as chalkError,
  green  as chalkSuccess,
  yellow as chalkWarning,
  blue as chalkProcessing ,
}
