/* eslint-disable */
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

const webpackConfig = require('@nrwl/react/plugins/webpack');
const webpack = require('webpack');

function getConfig(config) {
  config = webpackConfig(config);
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.ECO_API_URL': JSON.stringify(process.env.ECO_API_URL),
      'process.env.GOOGLE_CLIENT_ID': JSON.stringify(
        process.env.GOOGLE_CLIENT_ID
      ),
    })
  );
  config.module.rules.push({
    test: /\.(png)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });
  return config;
}
module.exports = getConfig;
