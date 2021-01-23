const path = require('path')

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
