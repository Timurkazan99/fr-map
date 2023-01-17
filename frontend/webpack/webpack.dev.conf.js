/* Development config:
  ========================================================================== */
const webpack = require('webpack')

// Source: https://github.com/survivejs/webpack-merge
const { merge } = require('webpack-merge')
// Base config
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    static: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    client: {
      overlay: {
        warnings: true,
        errors: true
      }
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})