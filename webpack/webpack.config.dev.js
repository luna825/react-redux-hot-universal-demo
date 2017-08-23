const path = require("path")
const webpack = require('webpack')


const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'bootstrap-loader',
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
              presets: ['env', 'react', 'stage-0'],
              plugins: ['transform-decorators-legacy']
            }
          }
        ]
      },
      {test: /\.css$/, use:['style-loader', 'css-loader']},
      {
        test: /\.scss$/,
        use:[
          'style-loader',
          {loader: 'css-loader', options:{
            module: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }},
          {loader:'postcss-loader', options:{
            plugins:[require('autoprefixer')]
          }},
          'sass-loader'
        ]
      },
      { 
        test: /\.(png|jpg|gif)$/, 
        use:[
          {loader: 'url-loader', options: {
            limit: 10240
          }}
        ]
      },
      {
        test:/\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options:{
          limit: 10000,
          mimetype: 'image/svg+xml'
        }
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
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
  ],
  resolve: {
    modules: ["node_modules", 'src'],
    extensions: [".js", ".json", ".jsx", ".css"]
  }
}

module.exports = config
