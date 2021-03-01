const path = require('path');
const fs = require('fs');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    bundle: './index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  experiments: {
    topLevelAwait: true
  },
  devServer: {
    host: '0.0.0.0',
    port: 9200,
    historyApiFallback: true,
    hot: false,
    https: {
      key: fs.readFileSync('/Users/danny/.ssh/localhost/private-key.pem'),
      cert: fs.readFileSync('/Users/danny/.ssh/localhost/bitbuilders-cert.pem')
    }
  }
};
