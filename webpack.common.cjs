const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    main: './src/main.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '',
    clean: true, 
  },
  module: {
    rules: [
      {
      test: /\.html$/i,
      loader: "html-loader",
    },
   
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/[name][ext]' 
      }
    },
     {
  test: /\.svg$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/[name][ext]'
  }
},
      {
      
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader'                 
        ],
      },

    ],
  },
  plugins: [

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),

    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: 'main.html',
      chunks: ['main'],
    }),
  ],
};