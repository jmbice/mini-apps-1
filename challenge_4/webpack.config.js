const path = require('path');
var SRC_DIR = path.join(__dirname, '/client');


module.exports = {
  //start with
  entry: `${SRC_DIR}/app.jsx`,
  //create bundle
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  //do this to each file
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        include: `${SRC_DIR}`,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  }, resolve: {
    extensions: ['.js','.jsx'],
  },
};
