var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var precss = require('precss');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
  'webpack-hot-middleware/client',
  'babel-polyfill',
  './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer,
          precss
        ]
      }
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loaders: ['eslint-loader'],
        include: [
        path.resolve(__dirname, "src"),
        ],
      },
      {
        loaders: ['react-hot-loader','babel-loader'],
        include: [
        path.resolve(__dirname, "src"),
        ],
        test: /\.js$/
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
}