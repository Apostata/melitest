const path = require('path');
const environments = require('./variaveis');
console.log(environments);
const products = require('../server/mock/mockproducts.json');
module.exports = {
  contentBase: path.join(__dirname, '../public'), // path para pegar os arquivos do servidor;
  compress: true, // enable gzip
  index: 'index.html',
  port: 8080,
  hot: true, // hot reload
  open: true, // initialize after bundle,
  overlay: true, // show errors overlay on screen
  https: false,
  hot: true,
  historyApiFallback: true
  // before: (app) => {
  //   app.get('/api', (req, res) => {
  //     res.send(products);
  //   });
  // },
};