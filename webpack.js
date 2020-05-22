/* eslint-disable */
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

const webpackConfig = require('@nrwl/react/plugins/webpack');
const webpack = require('webpack');

function getConfig(config) {
  config = webpackConfig(config);

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API': JSON.stringify(process.env.REACT_APP_API),
      'process.env.REACT_APP_AWS_DOMAIN': JSON.stringify(
        process.env.REACT_APP_AWS_DOMAIN
      )
    })
  );
  return config;
}
module.exports = getConfig;
