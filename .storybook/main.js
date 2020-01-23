const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-notes'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.less$/,
      loaders: ['less-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
