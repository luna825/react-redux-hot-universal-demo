const path = require("path")
const webpack = require('webpack')


const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          {
            loader: 'babel-loader',
            options:{
              presets: ['env', 'react', 'stage-0']
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      "process.env":{
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config
