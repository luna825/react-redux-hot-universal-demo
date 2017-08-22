const path = require("path")
const webpack = require('webpack')


const config = {
  entry: [
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
              presets: ['env', 'react']
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
    })
  ]
}

module.exports = config
