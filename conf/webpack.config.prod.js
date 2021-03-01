const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    bundle: './index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[fullhash].js'
  },
  module: {
    rules: [
      // {
      //   test: /\.ts$/i,
      //   use: ['ts-loader'],
      // },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'fonts/'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['bundle']
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/css/*',
          to: '../dist/'
        },
        {
          from: 'src/img/**/*',
          to: '../dist/'
        },
        {
          from: 'service-worker.js',
          to: '../dist/service-worker.js'
        },
        {
          from: 'manifest.json',
          to: '../dist/manifest.json'
        }
      ]
    })
  ],
  experiments: {
    topLevelAwait: true
  }
};
