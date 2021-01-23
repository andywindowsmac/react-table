const path = require('path')

const alias = {
  '@Assets': path.resolve(process.env.PWD, 'src/assets'),
  '@Atoms': path.resolve(process.env.PWD, 'src/atoms/'),
  '@Molecules': path.resolve(process.env.PWD, 'src/molecules/'),
  '@Styles': path.resolve(process.env.PWD, 'src/styles'),
}

function wrapLoader(loader, options) {
  if (options === false) {
    return [];
  }

  return [
    {
      loader,
      options,
    },
  ];
}

module.exports = {
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...(config.module.rules || []),
          {
            test: /\.s[ca]ss$/,
            ...config.rule,
            use: [
              "@teamsupercell/typings-for-css-modules-loader",
              ...wrapLoader(require.resolve('style-loader'), {}),
              ...wrapLoader(require.resolve('css-loader'), {
                modules: true,
              }),
              ...wrapLoader(require.resolve('sass-loader'), {}),
            ],
          },
        ],
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...alias,
        },
      },
    };
  },
  "stories": [
    `${process.env.PWD}/src/**/*.stories.mdx`,
    `${process.env.PWD}/src/**/*.stories.@(js|jsx|ts|tsx)`
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
