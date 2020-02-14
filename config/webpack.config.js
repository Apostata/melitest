const path = require('path');
const loaders = require('./loaders/');
const plugins = require('./plugins');
const devServer = require('./dev-server');


const nodeENV = process.env.NODE_ENV;
// eslint-disable-next-line no-console
console.log(nodeENV);

const webpack = {
  mode: nodeENV !== 'development' ? 'production' : 'development',
  context: path.resolve(__dirname, '../src'),
  entry: {
    main:[ './index.js'],
  },

  output: {
    filename: 'js/[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, '/public'),
  },
  devtool: nodeENV === 'production' ? 'source-map' : 'eval-source-map',
  module: {
    rules: loaders,
  },
  plugins,
  devServer,
  watch: true,
  resolve: {
    extensions: [ '.js']
  }
};

module.exports = webpack;
