import config from './rollup.config'
import postcss from 'rollup-plugin-postcss-modules'
import alias from '@rollup/plugin-alias';
import json from 'rollup-plugin-json';
import smartAsset from "rollup-plugin-smart-asset"
import fs from "fs";
import glob from 'glob'
import { chalkProcessing } from './chalkConfig'

/* initialize CSS files because of a catch-22 situation:
   https://github.com/rollup/rollup/issues/1404 */
glob.sync('src/**/*.scss').forEach((css) => {  // Use forEach because https://github.com/rollup/rollup/issues/1873
	const definition = `${css}.d.ts`
	if (!fs.existsSync(definition))
		fs.writeFileSync(definition, 'const mod: { [cls: string]: string }\nexport default mod\n')
})

const ALIAS_DIR = `${process.env.PWD}/alias.js`

let aliasFile = {}
if (fs.existsSync(ALIAS_DIR)) {
  chalkProcessing('Alias proceed and it\'s dir: ',  ALIAS_DIR)
  aliasFile = require(ALIAS_DIR)
}

export default {
  ...config,
  plugins: [
    alias({
      extensions: [ '.scss', '.ts', '.tsx'],
      entries: aliasFile
    }),
    json(),
    smartAsset({  url: "copy", publicPath: '/_next/static/', useHash: true }),
    postcss({
      extract: true,
      modules: true,
      writeDefinitions: true,
      minimize: true,
      plugins: [
        require('postcss-file')({
          assetsPath: 'build',
          url: 'copy',
          publicPath: '/_next/static/',
          hash: true
        })
      ],
      use: [
        ['sass', {
            style: 'expanded',
            sourceComments: true,
        }]
      ]
    }),
    ...config.plugins,
  ]
};
