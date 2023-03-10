const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react'
            ]
          }
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.parsed),
        'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production')
      }),
    ].filter(Boolean),
  }