const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin"); //Bad Practice?
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //used for production
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
	entry: [
		"./src/index.js",
		'tether'
	],
	output: {
		path: path.resolve(__dirname, "./dist/"),
		filename: "bundle.js"
	},/*
	devServer: {
	    contentBase: 'dist/', // Relative directory for base of server
	    publicPath: '/', // Live-reload
	    inline: true,
	    port: process.env.PORT || 3000, // Port Number
	    host: 'localhost', // Change to '0.0.0.0' for external facing server
	    historyApiFallback: true,
  	},*/
	module: {
		rules: [
			{ 
				test: /\.js$/,
				exclude: /node_modules/, 
				loader: "babel-loader" 
			},
			{
				test: /\.html$/,
				exclude: /node_modules/, 
				loader: "html-loader"
			},
			{
	        	test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']
	      	},
			{
	            test: /\.scss$/,
            	
		          use: [
		            {
		             	loader: 'style-loader', 
		            },
		            {
		            	loader: MiniCssExtractPlugin.loader
		            },
		            {
		             	loader: 'css-loader' 
		            },
		            {
						loader: 'postcss-loader', // Run post css actions
						options: {
							plugins() {
							  // post css plugins, can be exported to postcss.config.js
							  return [precss, autoprefixer];
							}
						}
		            },
		            {
		              loader: 'sass-loader' 
		            }
		          ]
		        
        	},
        	// Bootstrap 4
			{
			  test: /bootstrap\/dist\/js\/umd\//, 
			  use: 'imports-loader?jQuery=jquery'
			},
			{
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
				use: 'file-loader',
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
				  'file-loader?name=images/[name].[ext]',
				  'image-webpack-loader?bypassOnDebug'
				]
			},
			{	//file format for compression. possibly used by bootstrap
		        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		        use: 'url-loader?limit=10000',
	      	}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new ExtractTextWebpackPlugin({
			filename: "[name].css"
		}),
		new TransferWebpackPlugin([
	      { from: 'dist' },
	    ])/*,
	    // BOOTSTRAP. So you dont have to import at every file. maybe remove this for iptimization? 
	    new webpack.ProvidePlugin({
		  $: 'jquery',
		  jQuery: 'jquery',
		  'window.jQuery': 'jquery',
		  tether: 'tether',
		  Tether: 'tether',
		  'window.Tether': 'tether',
		  Popper: ['popper.js', 'default'],
		  'window.Tether': 'tether',
		  Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
		  Button: 'exports-loader?Button!bootstrap/js/dist/button',
		  Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
		  Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
		  Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
		  Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
		  Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
		  Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
		  Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
		  Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
		  Util: 'exports-loader?Util!bootstrap/js/dist/util'
		})*/
	]
}
