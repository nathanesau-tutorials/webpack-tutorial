const webpack = require('webpack');


const config = {
  
  entry: './src/js/index.js',
  
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },

  module:{
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },

      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }

    ]
  }

}

module.exports = config;