const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	mode: 'none',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
	  rules: [
	    {
	      test: /\.m?js$/,
	      exclude: /(node_modules)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env', '@babel/preset-react']
	        }
	      }
	    }
	  ]
	},
	optimization: {
	  minimize: true,
	},
};
