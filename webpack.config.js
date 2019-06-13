const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

<<<<<<< HEAD
const outputDirectory = 'dist';
const srcClientPath = path.resolve('./', 'src/client');
=======
const outputDirectory = 'dist'
>>>>>>> 5d5cd5692fe56d04c7d09a99fe0639e44742ea8f

module.exports = {
  entry: ['babel-polyfill', './src/client/app.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
<<<<<<< HEAD
            loader: require.resolve('css-loader'),
=======
            loader: require.resolve('css-loader')
>>>>>>> 5d5cd5692fe56d04c7d09a99fe0639e44742ea8f
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|img|jpg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    alias: {
      src: srcClientPath
    },
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png'
    })
  ]
}
