const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { src, build, assets } = require('./paths');

module.exports = {
  entry: [`${src}/index.tsx`],

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: assets, to: 'assets' }],
    }),

    new HtmlWebpackPlugin({
      //favicon: `${src}/images/favicon.ico`,
      template: `${src}/index.html`,
    }),

    new webpack.WatchIgnorePlugin({
      paths: [/css\.d\.ts$/],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': src,
     'assets': assets,
    },
  },
};
