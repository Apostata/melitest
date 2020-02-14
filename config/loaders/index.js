const jsLoader = require('./jsLoader');
const cssLoader = require('./cssLoader');
const imageLoader= require('./imageLoader');

const loaders = [];
loaders.push(cssLoader);
loaders.push(imageLoader);
loaders.push(jsLoader);
loaders.push({test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" });
loaders.push({test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" });
loaders.push({test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" });
loaders.push({test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" });

module.exports = loaders;
