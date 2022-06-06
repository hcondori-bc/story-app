const path = require('path');

module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname,'src','App.jsx'),

  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname,'public'),
    filename: 'main.bundle.js'
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',

  // PATH RESOLVE
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  // DEV SERVER ENTRY POINT
  devServer: {
    static: path.join(__dirname,'src')
  },

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  // PATH RESOLVE
  resolve: {
    extensions: ['.js', '.json', '.jsx'],

    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
};