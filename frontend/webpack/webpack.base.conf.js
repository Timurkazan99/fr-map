const path = require('path')
const fs = require('fs')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config({ path: './.env' });

// Main const
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../build'),
  assets: 'assets/'
}


module.exports = {
  externals: {
    paths: PATHS
  },
  entry: ['@babel/polyfill', `${PATHS.src}/index.jsx`],
  output: {
    filename: `${PATHS.assets}js/[name].[contenthash].js`,
    path: PATHS.dist,
    /*
      publicPath: '/' - relative path for dist folder (js,css etc)
      publicPath: './' (dot before /) - absolute path for dist folder (js,css etc)
    */
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        // JavaScript
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules|static/'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      // {
      //   // Fonts
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]'
      //   }
      // },
      {
        // Images / icons
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: `${PATHS.assets}img`,
          publicPath: `${PATHS.src}\\${PATHS.assets}`,
        }
      },
      {
        // scss
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        // css
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  // resolve: {
  //   alias: {
  //     '~': PATHS.src, // Example: import Dog from "~/assets/img/dog.jpg"
  //     '@': `${PATHS.src}/js`, // Example: import Sort from "@/utils/sort.js"
  //   },
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`
    }),
    new CopyWebpackPlugin({
      patterns: [
        // Images:
        // {
        //   from: `${PATHS.src}/${PATHS.assets}img`,
        //   to: `${PATHS.assets}img`
        // },
        // Fonts:
        // {
        //   from: `${PATHS.src}/${PATHS.assets}fonts`,
        //   to: `${PATHS.assets}fonts`
        // },
        // // Static (copy to '/'):
        {
          from: `${PATHS.src}/static`,
          to: ''
        }
      ]
    }),
    new HtmlWebpackPlugin({ template: `./public/index.html`}),
  ]
}